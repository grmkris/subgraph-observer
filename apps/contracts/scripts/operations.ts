import { task } from "hardhat/config";
import { ERC721SO } from "contract-types";

task("nft-balance", "Gets the balance of an NFT for a specific address")
  .addParam("address", "The address to get the balance of")
  .setAction(async (taskArgs, hre) => {
    const { address } = taskArgs;

    // get erc721so from deployments
    const nftContract = (await hre.ethers.getContract("ERC721SO")) as ERC721SO;

    // Get the balance of the NFT
    const balance = await nftContract.balanceOf(address);
    console.log(
      `The balance of NFTs for address ${address} is: ${balance.toString()}`
    );
  });

task("update-mint-price", "Updates the mint price of the NFT")
  .addParam("price", "The new price to set")
  .setAction(async (taskArgs, hre) => {
    const { price } = taskArgs;

    // get erc721so from deployments
    const nftContract = (await hre.ethers.getContract("ERC721SO")) as ERC721SO;

    // Get the balance of the NFT
    const tx = await nftContract.setMintPrice(price);
    await tx.wait();
    console.log(`The new mint price is: ${price}`);
  });

task("update-base-uri", "Updates the base uri of the NFT")
  .addParam("uri", "The new uri to set")
  .setAction(async (taskArgs, hre) => {
    const { uri } = taskArgs;

    // get erc721so from deployments
    const nftContract = (await hre.ethers.getContract("ERC721SO")) as ERC721SO;

    // Get the balance of the NFT
    const tx = await nftContract.setBaseURI(uri);
    await tx.wait();
    console.log(`The new base uri is: ${uri}`);
  });
