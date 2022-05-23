import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
