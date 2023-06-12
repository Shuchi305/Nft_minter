# NFT minter
Give a custom link to the application and it would convert it into an NFT which would be available on the Polygon Mumbai testnet.

# How to reproduce this in your local system?
1. Clone the front_end file on your system
2. Connect to metamask
3. run the command "npm install"
4. run the command "npm start"

# Expected Output:

On successfully running the application you will get the following page
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/b7897d1e-2311-4f36-a541-934757f3fb43)
 
 # 1. NFT Minting
 To mint an NFT we are using ERC721 standards. Here is how your page must look like:
  (make sure you are now connected to metamask)
 ![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/e45b86d7-416c-454b-8be7-c4cc01b06bbd)

 
Upon putting a link and hitting the button mint NFT you would be redirected to metamask to confirm your payment
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/7991d12d-05a6-43d4-9805-652b262ca972)


A few seconds later you can see the minted NFT token.
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/23f3d844-5e4d-4f1d-8e04-cf63a0747db0)

# 2. Get NFT link from TokenId
To get a link for a given TokenId we have created a mapping which would uniquely map a minted nft to a unique tokenID every time. Hence using the tokenId, one can retrieve the NFT link.
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/3e8f3aa5-2599-4626-bd67-2f43f501d7d2)

Upon writing a valid tokenID, you will get the NFT link as follows:
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/41c52397-571b-4212-82cb-c978de22120e)

On an invalid token ID you will get no output.

# 3. Transfer NFTs from your account to another account
You can only transfer an NFT you own. Hence the code first checks for your ownership and then transfers the NFT to the provided account.
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/7a2d8fef-115b-465f-bf1d-a07fb12e602b)


If you try to pass an NFT that does not belong to you, you would get the following error page:
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/b545e6a1-40c7-4394-a4ab-a52bc798b608)


After a successful transfer of NFT the page give you the following output:
![image](https://github.com/Shuchi305/Nft_minter/assets/66833303/4c169ac9-2cdc-456b-a7c8-e4fe608680ab)








