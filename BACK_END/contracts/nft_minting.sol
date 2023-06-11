// SPDX-License-Identifier: MIT
pragma solidity >=0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LinkNFTMarketplace is ERC721, Ownable {
    struct NFTMetadata {
        string ipfsLink;
    }

    uint256 private tokenIdCounter;
    mapping(uint256 => NFTMetadata) private tokenIdToMetadata;

    constructor() ERC721("LinkNFT", "LNFT") {}

    function mint(string memory ipfsLink) external returns (uint256){
        tokenIdCounter++;
        _safeMint(msg.sender, tokenIdCounter);
        tokenIdToMetadata[tokenIdCounter] = NFTMetadata(ipfsLink);
        return tokenIdCounter;
    }

    function getIPFSLink(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return tokenIdToMetadata[tokenId].ipfsLink;
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Transfer caller is not owner nor approved"
        );
        _transfer(from, to, tokenId);
    }
}

