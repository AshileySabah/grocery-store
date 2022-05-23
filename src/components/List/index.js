import React from "react";
import Texto from "../Texto";

import { StyleSheet, View, Image } from "react-native";

const List = ({ itens }) => {
  return (
    <>
      <Texto style={styles.titulo}>{itens?.titulo}</Texto>

      {itens?.lista?.map(({ nome, imagem }, index) => {
        return (
          <View style={styles.container} key={index}>
            <Image style={styles.image} source={imagem} />
            <Texto>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
};
export default List;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#464646",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 10,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
});
