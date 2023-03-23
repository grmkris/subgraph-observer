import { defineConfig } from "@wagmi/cli";
import { hardhat, react } from "@wagmi/cli/plugins";
import { NFT_CONTRACT_ADDRESS } from "contract-types/src";
import type { Address } from "wagmi";

export default defineConfig({
  out: "src/wagmiHooks.ts",
  contracts: [],
  plugins: [
    hardhat({
      project: "../contracts",
      include: [
        // the following patterns are included by default
        "contracts/**/*.json",
      ],
      deployments: {
        ERC721SO: {
          80001: NFT_CONTRACT_ADDRESS.polygon_mumbai.nft as Address,
        },
      },
    }),
    react(),
  ],
});
