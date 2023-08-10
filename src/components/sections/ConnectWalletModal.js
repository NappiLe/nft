import React, {useState} from 'react'
import Modal from '../Modal'
import { ethers } from 'ethers'

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

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

function ConnectWalletModal() {
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
    <Modal title="Connect Wallet">
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
  )
}

export default ConnectWalletModal