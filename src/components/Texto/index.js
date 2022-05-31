import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const Texto = ({ children, style }) => {
  let estilo = styles.texto;
  if (style?.fontWeight === "bold") {
    estilo = styles.textoNegrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
};

export default Texto;
