import React, { useState, FormEvent, useEffect } from "react";
import { View, ScrollView, Text, AsyncStorage } from "react-native";
import PageHeader from "../../components/PageHeader";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFilterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [weekDay, setWeekDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeacher = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeacher.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleFilter() {
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get("/classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  return (
    <View>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleFilter}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual o horário?"
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          flexGrow: 1,
          paddingBottom: 260,
        }}
        style={styles.teacherList}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              favorited={favorites.includes(teacher.id)}
              key={teacher.id}
              teacher={teacher}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
