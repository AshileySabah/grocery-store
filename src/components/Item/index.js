import React from "react";
import Texto from "../Texto";

import { StyleSheet, View, Image } from "react-native";

const Item = ({ item: { nome, imagem } }) => (
  <View style={styles.container} key={nome}>
    <Image style={styles.image} source={imagem} />
    <Texto>{nome}</Texto>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 10,
    marginHorizontal: 16,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
});
