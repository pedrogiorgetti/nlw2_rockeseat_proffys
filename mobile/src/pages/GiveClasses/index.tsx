import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.content}
        source={giveClassesBgImage}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para isso você precisa se cadastrar como professor na nossa plataform
          web!
        </Text>
      </ImageBackground>
      <RectButton onPress={handleGoBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
