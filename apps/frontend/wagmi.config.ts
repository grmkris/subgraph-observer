import { defineConfig } from "@wagmi/cli";
import { hardhat, react } from "@wagmi/cli/plugins";

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
          80001: "0x2a617CD48f1858F5F0231bB8d906928879857174",
        },
      },
    }),
    react(),
  ],
});
