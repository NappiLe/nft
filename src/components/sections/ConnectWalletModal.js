import React, {useState} from 'react'
import styled from "styled-components"
import FeatherIcon from 'feather-icons-react';
import { ethers } from 'ethers';

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

const Overlay= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
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

// const Number= styled.p`
//     background-color: #e5d6cc;
//     width: 22px;
//     height: 22px;
//     border-radius: 20px;
//     color: #fff;
//     margin-right: 0.75rem;
//     font-size: .875rem;
//     line-height: 1.25rem;
//     text-align: center;
// `

function ConnectWalletModal({onHandleModal}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectwalletHandler = () => {
    if (window.ethereum) {
        provider.send("eth_requestAccounts", [])
            .then(async () => {
                await accountChangedHandler(provider.getSigner());
            })
    } else {
        setErrorMessage("Please Install MetaMask!!!");
    }
}

const accountChangedHandler = async (newAccount) => {
  const address = await newAccount.getAddress();
  setDefaultAccount(address);
  const balance = await newAccount.getBalance()
  setUserBalance(ethers.utils.formatEther(balance));
  // await getuserBalance(address)
}
// const getuserBalance = async (address) => {
//   const balance = await provider.getBalance(address, "latest")
// }

  return (
    <Overlay>
        <Modal>
          <Container>
            <Title>Connect Wallet</Title>
            <button onClick={onHandleModal}><FeatherIcon icon="x-circle" /></button>
          </Container>
          <button onClick={connectwalletHandler}>
            {defaultAccount ? "Connected!!" : "Connect Metamask"}
          </button>
          <div>
                <h4>Address:{defaultAccount}</h4>
                <div>
                    <h3>
                        Wallet Amount: {userBalance}
                    </h3>
                </div>
            </div>
            {errorMessage}
        </Modal>
    </Overlay>
  )
}

export default ConnectWalletModal