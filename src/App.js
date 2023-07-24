import React, {useState} from "react"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes"

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";
import About from  "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import ScrollToTop from "./components/sections/ScrollToTop";
import Career from "./components/sections/Career";
import ConnectWalletModal from './components/sections/ConnectWalletModal'

function App() {
  const [isShowModal, setIsShowModal]= useState(false)

    const handleModal = () =>{
        setIsShowModal(!isShowModal)
    }
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
          <Navigation onHandleModal={handleModal}/>
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Career />
          <Footer />
          <ScrollToTop />
          { isShowModal && <ConnectWalletModal onHandleModal={handleModal}/> }
      </ThemeProvider>
    </>
  );
}

export default App;
