import React, {useState} from 'react'
import styled from "styled-components"
import FeatherIcon from 'feather-icons-react';
import { ethers } from 'ethers';

const Overlay= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
`
const Modal= styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
    border-radius: 1.5rem;
    
`
const Title= styled.h2`
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    align-self: flex-start;
    padding: 1rem;
`
const Container= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #304f5d;
  margin: 0 auto;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  color: ${props => props.theme.body};
`

const Number= styled.p`
    background-color: #e5d6cc;
    width: 22px;
    height: 22px;
    border-radius: 20px;
    color: #fff;
    margin-right: 0.75rem;
    font-size: .875rem;
    line-height: 1.25rem;
    text-align: center;
`

function ConnectWalletModal({onHandleModal}) {
  const [errorMessage, setErrorMessage] = useState(null)
  const [defaultAccount, setDefaultAccount] = useState(null)
  const [userBalance, setUserBalance] = useState(null)

  const connectWallet = () => {
    console.log("AA")
    if (window.ethereum){
      window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result => {
          accountChanged([result[0]])
        })
    } else{
      setErrorMessage("Install MetaMask please")
    }
  }

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
  }

  return (
    <Overlay>
        <Modal>
          <Container>
            <Title>Connect Wallet</Title>
            <FeatherIcon icon="x-circle" ><button onClick={onHandleModal}/></FeatherIcon>
          </Container>
          <button onClick={connectWallet}>
            Metamask
          </button>
          <h3>Address: {defaultAccount}</h3>
          {errorMessage}
        </Modal>
    </Overlay>
  )
}

export default ConnectWalletModal