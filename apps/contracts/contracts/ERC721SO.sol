// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721SO is ERC721, Ownable {
    uint256 public totalSupply;
    uint256 public _mintPrice;
    string public _host;

    constructor(string memory name, string memory symbol, uint256 mintPrice, string memory baseURI) ERC721(name, symbol) {
        _host = baseURI;
        _mintPrice = mintPrice;
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return _host;
    }

    function mint() public payable returns (uint256) {
        uint256 tokenId = totalSupply;
        totalSupply++;

        if (msg.sender != owner()) {
            require(msg.value >= _mintPrice, "Minting requires payment");
        }

        _mint(msg.sender, tokenId);

        return tokenId;
    }

    function setMintPrice(uint256 mintPrice) public onlyOwner {
        _mintPrice = mintPrice;
    }

    function getMintPrice() public view returns (uint256) {
        return _mintPrice;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }
}
