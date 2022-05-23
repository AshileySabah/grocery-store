import React from "react";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Container;
