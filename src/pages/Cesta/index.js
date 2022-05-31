import React from "react";
import { Image, View, TouchableOpacity, FlatList } from "react-native";

import Item from "../../components/Item";
import Texto from "../../components/Texto";

import mock from "./mock";
import styles from "./styles";

const Cesta = () => {
  return (
    <View>
      <FlatList
        data={mock?.itens?.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
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

                <Texto style={styles.tituloLista}>{mock?.itens?.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default Cesta;
