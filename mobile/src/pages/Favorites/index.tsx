import React from "react";
import { View } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

const Favorites: React.FC = () => {
  return (
    <View>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
};

export default Favorites;
