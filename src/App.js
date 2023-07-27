import React, {useState} from "react"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes"

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";
import About from  "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
//import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import ScrollToTop from "./components/sections/ScrollToTop";
import Career from "./components/sections/Career";
import ConnectWalletModal from './components/sections/ConnectWalletModal'
import Login from './components/Login'
import GetGift from './components/sections/GetGift';

function App() {
  const [isShowConnectWalletModal, setIsShowConnectWalletModal]= useState(false)
  const [isShowLoginModal, setIsShowLoginModal]= useState(false)

    const handleConnectWalletModal = () =>{
        setIsShowConnectWalletModal(!isShowConnectWalletModal)
    }

    const handleLoginModal = () =>{
      setIsShowLoginModal(!isShowLoginModal)
  }
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
          <Navigation 
            onHandleConnectWalletModal= {handleConnectWalletModal}
            onHandleLoginModal= {handleLoginModal}
          />
          <Home />
          <About />
          <Roadmap />
          <GetGift />
          <Team />
          <Career />
          <Footer />
          <ScrollToTop />
          { isShowConnectWalletModal && <ConnectWalletModal onHandleModal={handleConnectWalletModal}/> }
          { isShowLoginModal && <Login onHandleLoginModal={handleLoginModal}/> }
      </ThemeProvider>
    </>
  );
}

export default App;
