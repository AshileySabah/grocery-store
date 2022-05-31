import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

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
    fontWeight: "bold",
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
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 16,
  },
  tituloLista: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#464646",
  },
});

export default styles;
