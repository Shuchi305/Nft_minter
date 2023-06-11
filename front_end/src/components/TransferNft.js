import React,{useState} from 'react'

import contractAbi from "../ABI/nft_mintingABI.json"
import {ethers} from "ethers"

const CONTRACT_ADDRESS = "0x1f9C54C11c2E766f72AD9C753e7E7EA20D4C8536";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await window.ethereum.request({ method: 'eth_requestAccounts' });
const WALLET = provider.getSigner();

const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, WALLET);

function TransferNft() {
    const [ ownerAddress, setOwnerAddress ] = useState("");
    const [ receiverAddress, setReceiverAddress] = useState("");
    const [ tokenId, setTokenId ] = useState("");
    const [ loading, setLoading] = useState(false);
    const [ showValue, setShowValue] = useState("");

    const handleOwnerAddressChange = (e) => {
        setOwnerAddress(e.target.value);
    }

    const handleReceiverAddressChange = (e) => {
        setReceiverAddress(e.target.value);
    }

    const handleTokenIdChange = (e) => {
        setTokenId(e.target.value);
    }

    const handleTransfer = async () => {
        try{
            setLoading(true);
            const transaction = await contract.transferFrom( ownerAddress, receiverAddress, tokenId);
            await transaction.wait();
            setShowValue("NFT transferred sucessfully");
            setLoading(false);
        }
        catch(error){
            console.error("Failed to transfer NFT:", error);
            setShowValue("Failed to transfer NFT, try again later");
            setLoading(false);
        }

    }

    return (
        <div style={{ textAlign: "center" , padding: 100 }}>
            <h2>Transfer Your Tokens</h2>
            <label>Your address:</label>
            <input type="text" style = {{width:350}} value = {ownerAddress} onChange = {handleOwnerAddressChange}/>
            <br/><br/>
            <label>Your NFT Token Id:</label>
            <input type="text" style = {{width:300}} value = {tokenId} onChange = {handleTokenIdChange}/>
            <br/><br/>
            <label>Receiver address:</label>
            <input type="text" style = {{width:350}} value = {receiverAddress} onChange = {handleReceiverAddressChange}/>
            <br/><br/>
            <button style = {{height:30}} onClick={handleTransfer} disabled={loading}>
                Transfer
            </button>
            
            {loading && <p>Loading...</p>}
            <h3>{showValue}</h3>
        </div>
    )
}

export default TransferNft
