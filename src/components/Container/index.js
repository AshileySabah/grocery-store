import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import styles from "./styles";

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

export default Container;
