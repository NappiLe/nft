// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   position: absolute;
//   border: 1px solid black;
//   border-radius: 15px;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
//   right: 10%;
// `
// const ListOfItems= styled.ul`
//     list-style-type: none;
//     padding: 0.5rem;
// `
// const Button= styled.button`
//     color: ${props => props.theme.text};
//     outline: none;
//     border: none;  
    
//     width: 100%;
//     text-align:left;
//     font-size: ${props => props.theme.fontsm};
//     padding: 0.5rem;
//     cursor: pointer;
//     position: relative;
//     background-color: ${props => props.theme.body};

//     &:hover{
//         background-color: pink;
//     }
// `

// function Dropdown({onHandleConnectWalletModal, onHandleLoginModal}) {
//   return (
//     <Container>
//         <ListOfItems>
//             <li><Button onClick={onHandleLoginModal}>Login</Button></li>
//             <li><Button onClick={onHandleConnectWalletModal}>Connect Wallet</Button></li>
//         </ListOfItems>
//     </Container>
//   )
// }

// export default Dropdown