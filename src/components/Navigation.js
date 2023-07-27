import React from 'react'
import styled from "styled-components";
// import FeatherIcon from 'feather-icons-react';
// import Dropdown from './Dropdown';
import Logo from "./Logo";

const Section = styled.section`
    width: 100vw;
    background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 5rem;
    align-items: center;

    width: 85%;
    height: ${props => props.theme.navHeight};
    margin: 0 auto;
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${props => props.theme.text};
    cursor: pointer;

    &::after{
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after{
        width: 100%;
    }
`
// const Button = styled.button`
//     display: inline-block;
//     background-color: ${props => props.theme.text};
//     color: ${props => props.theme.body};
//     outline: none;
//     border: none;  
    
//     font-size: ${props => props.theme.fontsm};
//     padding: 0.9rem 2.3rem;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: all 0.2 ease;
//     position: relative;

//     &:hover{
//         transform: scale(0.9);
//     }

//     &::after{
//         content: ' ';
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%) scale(0);
//         border: 2px solid ${props => props.theme.text};
//         height: 100%;
//         width: 100%;
//         border-radius: 50px;
//         transition: all 0.2s ease;
//     }

//     &:hover::after{
//         transform: translate(-50%, -50%) scale(1);
//         padding: 0.3rem;
//     }
// ` 

// const DropdownButton = styled.button`
//     background-color: ${props => props.theme.body};
//     color: ${props => props.theme.text};
//     outline: none;
//     border: none;  
    
//     font-size: ${props => props.theme.fontxl};
//     padding: 0.9rem 2.3rem;
//     border-radius: 50px;
//     cursor: pointer;
//     position: relative;

//     &:hover{
//         transform: scale(0.9);
//     }
// `
function Navigation({onHandleConnectWalletModal, onHandleLoginModal}) {
    // const [isShowDropdown, setIsShowDropdown]= useState(false)

    // const handleDropDown = () =>{
    //     setIsShowDropdown(!isShowDropdown)
    // }

    const scrollTo = (id) => {
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    return (
        <>
        <Section id="navigation">
            <NavBar>
                <Logo />
                <Menu>
                    <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={()=> scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={()=> scrollTo('roadmap')}>Roadmap</MenuItem>
                    <MenuItem onClick={()=> scrollTo('getgift')}>Get Gift</MenuItem>
                    <MenuItem onClick={()=> scrollTo('team')}>Team</MenuItem>
                    <MenuItem onClick={()=> scrollTo('career')}>Career</MenuItem>
                </Menu>
                {/* <Button onClick={onHandleConnectWalletModal}>Connect Wallet</Button> */}
                {/* <DropdownButton onClick={handleDropDown}><FeatherIcon icon="align-justify" /></DropdownButton> */}
            </NavBar>
            {/* {isShowDropdown && 
                <Dropdown 
                    onHandleConnectWalletModal={onHandleConnectWalletModal} 
                    onHandleLoginModal={onHandleLoginModal} 
                />} */}
        </Section>
        
        </>
        
    )
}

export default Navigation
