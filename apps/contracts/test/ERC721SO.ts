import { ethers } from "hardhat";
import { ERC721SO } from "../typechain-types";
import { BigNumber } from "ethers";

import { expect } from "chai";

describe("ERC721SO", function () {
  let nft: ERC721SO;
  let admin: string;
  let user2: string;
  let tokenId1: BigNumber;
  let tokenId2: BigNumber;

  const baseURI = "https://example.com/";

  beforeEach(async function () {
    // Deploy the contract
    nft = (await ethers.getContractFactory("ERC721SO").then((factory) => {
      return factory.deploy(
        "Test NFT",
        "TST",
        ethers.utils.parseEther("0.1"),
        baseURI
      );
    })) as ERC721SO;

    // Get the signers
    const signers = await ethers.getSigners();
    admin = signers[0].address;
    user2 = signers[1].address;

    // Mint a token for the admin and a token for user2
    tokenId1 = await mint(admin);
    tokenId2 = await mint(user2);
  });

  async function mint(to: string): Promise<BigNumber> {
    // Check the initial balance
    const initialBalance = await balanceOf(to);

    // Mint a new token
    await nft
      .connect(ethers.provider.getSigner(to))
      .mint({ value: await nft.getMintPrice() });

    // Check the new balance and the returned token ID
    const newBalance = await balanceOf(to);
    expect(newBalance).to.equal(initialBalance.add(1));

    const tokenId = await nft._tokenIdCounter();
    return tokenId.sub(1);
  }

  async function balanceOf(owner: string): Promise<BigNumber> {
    return await nft.balanceOf(owner);
  }

  async function ownerOf(tokenId: BigNumber): Promise<string> {
    return await nft.ownerOf(tokenId);
  }

  async function tokenURI(tokenId: BigNumber): Promise<string> {
    return await nft.tokenURI(tokenId);
  }

  async function setMintPrice(price: BigNumber): Promise<void> {
    await nft.setMintPrice(price);
  }

  describe("balanceOf", function () {
    it("returns the correct balance for the owner", async function () {
      expect(await balanceOf(admin)).to.equal(1);
      expect(await balanceOf(user2)).to.equal(1);
    });
  });

  describe("ownerOf", function () {
    it("returns the correct owner for a token", async function () {
      const owner1 = await ownerOf(tokenId1);
      expect(owner1).to.equal(admin);
      const owner2 = await ownerOf(tokenId2);
      expect(owner2).to.equal(user2);
    });
  });

  describe("tokenURI", function () {
    it("returns the correct URI for a token", async function () {
      const uri1 = await tokenURI(tokenId1);
      expect(uri1).to.equal(`${baseURI}${tokenId1.toString()}`);

      const uri2 = await tokenURI(tokenId2);
      expect(uri2).to.equal(`${baseURI}${tokenId2.toString()}`);
    });
  });

  describe("setMintPrice", function () {
    it("updates the minting price", async function () {
      const newPrice = ethers.utils.parseEther("0.2");
      await setMintPrice(newPrice);
      expect(await nft.getMintPrice()).to.equal(newPrice);
    });

    it("reverts if called by a non-owner", async function () {
      const other = await ethers.getSigner(user2);
      await expect(
        nft.connect(other).setMintPrice(ethers.utils.parseEther("0.2"))
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("mint", function () {
    it("allows users to mint tokens", async function () {
      const initialBalance = await balanceOf(admin);
      await nft
        .connect(ethers.provider.getSigner(admin))
        .mint({ value: await nft.getMintPrice() });
      expect(await balanceOf(admin)).to.equal(initialBalance.add(1));
    });

    it("does not allow minting if the price is not paid", async function () {
      await expect(
        nft.connect(ethers.provider.getSigner(user2)).mint()
      ).to.be.revertedWith("Minting requires payment");
    });

    it("allows the owner to mint tokens for free", async function () {
      const initialBalance = await balanceOf(admin);
      await nft.connect(ethers.provider.getSigner(await nft.owner())).mint();
      expect(await balanceOf(admin)).to.equal(initialBalance.add(1));
    });
  });
});
