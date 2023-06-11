async function main() {
    const LinkNFTMarketplace = await ethers.getContractFactory("LinkNFTMarketplace");
 
    // Start deployment, returning a promise that resolves to a contract object
    const nft_minting = await LinkNFTMarketplace.deploy();
    console.log("Contract deployed to address:", nft_minting.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });