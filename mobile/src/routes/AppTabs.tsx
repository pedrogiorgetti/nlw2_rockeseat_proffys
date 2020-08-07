import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

import { Ionicons } from "@expo/vector-icons";
import { isIphoneX } from "react-native-iphone-x-helper";
const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: isIphoneX() ? 100 : 64,
          marginBottom: isIphoneX() ? -30 : 0,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
        component={TeacherList}
      />
      <Screen
        name="Favorites"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
        component={Favorites}
      />
    </Navigator>
  );
}
export default AppTabs;
