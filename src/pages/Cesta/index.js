import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Texto from "../../components/Texto";

import mock from "./mock";

const width = Dimensions.get("screen").width;

const Cesta = () => {
  return (
    <View>
      <Image style={styles.topo} source={mock?.topo} />
      <Texto style={styles.detalhes}>{mock?.titulo}</Texto>

      <View style={styles.conteudo}>
        <Texto style={styles.title}>{mock?.subtitulo}</Texto>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={mock?.logo} />
          <Texto style={styles.loja}>{mock?.fazenda}</Texto>
        </View>

        <Texto style={styles.descricao}>{mock?.descricao}</Texto>

        <Texto style={styles?.preco}>{mock?.preco}</Texto>

        <TouchableOpacity style={styles.botao}>
          <Texto style={styles.textoBotao}>{mock?.botao}</Texto>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cesta;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  detalhes: {
    position: "absolute",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
  },
  conteudo: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 10,
  },
  loja: {
    fontSize: 16,
    color: "#464646",
  },
  descricao: {
    color: "#a3a3a3",
    marginTop: 10,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },
  botao: {
    backgroundColor: "#2a9f85",
    paddingVertical: 15,
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 16,
  },
});
