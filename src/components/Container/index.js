import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

export default Container;
