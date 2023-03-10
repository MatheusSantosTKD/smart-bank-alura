import React from "react";
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/globalstyle";
import { BtnTema } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";
import { useState } from "react";

function App() {
  const [tema ,setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>

      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
      
    </ThemeProvider>
  );
}

export default App;
