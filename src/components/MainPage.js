import React, {useState} from 'react'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import {light} from "../styles/Themes"

import Team from "./sections/Team";
import ScrollToTop from "./sections/ScrollToTop";
import Career from "./sections/Career";
import ConnectWalletModal from './sections/ConnectWalletModal'
import Login from './Login'
import GetGift from './sections/GetGift';
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./sections/Home";
import About from  "./sections/About";
import Roadmap from "./sections/Roadmap";

function MainPage({handleShowModal, isShowModal}) {
    const [isShowLoginModal, setIsShowLoginModal]= useState(false)    

    const handleLoginModal = () =>{
    setIsShowLoginModal(!isShowLoginModal)
    }

    return (
        <>
        <GlobalStyles/>
        <ThemeProvider theme={light}>
            <Navigation 
                onHandleConnectWalletModal= {handleShowModal}
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
            { isShowModal && <ConnectWalletModal onHandleModal={handleShowModal}/> }
            { isShowLoginModal && <Login onHandleLoginModal={handleLoginModal}/> }
        </ThemeProvider>
        </>
    )
}

export default MainPage