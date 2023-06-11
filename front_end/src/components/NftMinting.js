import React,{useState} from 'react'

import contractAbi from "../ABI/nft_mintingABI.json"
import {ethers} from "ethers"

const CONTRACT_ADDRESS = "0x1f9C54C11c2E766f72AD9C753e7E7EA20D4C8536";
const provider = new ethers.providers.Web3Provider(window.ethereum);
await window.ethereum.request({ method: 'eth_requestAccounts' });
const WALLET = provider.getSigner();


const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, WALLET);

function NftMinting() {

    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [tokenId, setTokenId] = useState(null);

    const handleLinkChange = (e) => {
      setLink(e.target.value);
      setTokenId(null);
    };

    const handleMintNFT = async () => {
    try {
      setLoading(true);
      const transaction = await contract.mint(link);
      const receipt = await transaction.wait();
      const ID = receipt.events[0].args.tokenId;
      setTokenId(ID.toString());
      setLoading(false);

    } catch (error) {
      console.error("Failed to mint NFT:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" , padding: 100 }}>
      <h2>NFT Minting</h2>
      <label>Link:</label>
      <input type="text" style = {{width:350}} value={link} onChange={handleLinkChange} />
      <br/><br/>
      <button onClick={handleMintNFT} disabled={loading}>
        Mint NFT
      </button>
      
      {loading && <p>Loading...</p>}
      {tokenId && <div>
          <h3>Nft Minted successfully</h3>
          <p>Token Id of the minted NFT is:</p> 
          <p>{tokenId}</p> 
      </div>}
    </div>
  );
}

export default NftMinting
