import Logo from "../../../assets/logo.png";
import Topo from "../../../assets/topo.png";

import Tomate from "../../../assets/frutas/Tomate.png";
import Brócolis from "../../../assets/frutas/Brócolis.png";
import Batata from "../../../assets/frutas/Batata.png";
import Pepino from "../../../assets/frutas/Pepino.png";
import Abóbora from "../../../assets/frutas/Abóbora.png";

const mock = {
  topo: Topo,
  titulo: "Detalhes da cesta",
  subtitulo: "Cesta de verduras",
  logo: Logo,
  fazenda: "Jenny Jack Farm",
  descricao:
    "Uma cesta de produtos selecionandos cuidadosamente da fazenda direto para a sua cozinha.",
  preco: "R$ 40,00",
  botao: "Comprar",
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: Tomate,
      },
      {
        nome: "Brócolis",
        imagem: Brócolis,
      },
      {
        nome: "Batata",
        imagem: Batata,
      },
      {
        nome: "Pepino",
        imagem: Pepino,
      },
      {
        nome: "Abóbora",
        imagem: Abóbora,
      },
    ],
  },
};

export default mock;
