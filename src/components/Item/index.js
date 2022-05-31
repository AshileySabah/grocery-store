import React from "react";
import { View, Image } from "react-native";

import Texto from "../Texto";

import styles from "./styles";

const Item = ({ item: { nome, imagem } }) => (
  <View style={styles.container} key={nome}>
    <Image style={styles.image} source={imagem} />
    <Texto>{nome}</Texto>
  </View>
);

export default Item;
