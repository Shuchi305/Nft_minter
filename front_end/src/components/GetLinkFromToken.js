import React,{useState} from 'react'

import contractAbi from "../ABI/nft_mintingABI.json"
import {ethers} from "ethers"

const CONTRACT_ADDRESS = "0x1f9C54C11c2E766f72AD9C753e7E7EA20D4C8536";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await window.ethereum.request({ method: 'eth_requestAccounts' });
const WALLET = provider.getSigner();

const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, WALLET);

function GetLinkFromToken() {

    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [tokenId, setTokenId] = useState("");

    const handleTokenIdChange = (e) => {
        setTokenId(e.target.value);
        setLink("");
    };

    const handleTokenId = async () => {
    try {
        setLoading(true);
        const result = await contract.getIPFSLink(tokenId);
        setLink(result);
        setLoading(false);

    } catch (error) {
      console.error("Failed to retrieve NFT:", error);
      setLoading(false);
    }

  };

  return (
    <div style={{ textAlign: "center" , padding: 100 }}>
      <h2>Retrieve NFT</h2>
      <label>Token Id:</label>
      <input type="text" value={tokenId} onChange={handleTokenIdChange} />
      <br/><br/>
      <button onClick={handleTokenId} disabled={loading}>
        Get Link
      </button>
      
      {loading && <p>Loading...</p>}
      {link && <div>
        <h3>Retrieved Nft successfully</h3>
        <h4>NFT for this TokenId is :</h4>
        <p>{link}</p> 
      </div>}
    </div>
  );
}

export default GetLinkFromToken

