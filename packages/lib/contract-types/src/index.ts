import { Signer } from "ethers";
import { ERC721SO__factory } from "./generated";

export const NFT_CONTRACT_ADDRESS = {
  polygon_mumbai: {
    nft: "0x8242A0E9e2d876b04048ab84D3B835F7520a0BdD",
  },
  localhost: {
    nft: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  },
};

export const getContracts = async (config: {
  chain: "polygon_mumbai";
  provider: Signer;
}) => {
  const { chain, provider } = config;
  const { nft } = NFT_CONTRACT_ADDRESS[chain];

  const nftContract = ERC721SO__factory.connect(nft, provider);

  return {
    nftContract,
  };
};

export type { ERC721SO } from "./generated";
