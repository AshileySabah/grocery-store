import React from "react";
import Container from "./src/components/Container";
import Cesta from "./src/pages/Cesta";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

export default function App() {
  const [loadedFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    MontserratItalic: Montserrat_400Regular_Italic,
  });

  if (!loadedFont) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Cesta />
    </Container>
  );
}
