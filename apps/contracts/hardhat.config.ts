import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const index = accounts.indexOf(account);
    console.log(
      index === 0
        ? "Admin: " + account.address + " " + (await account.getBalance())
        : "Account " + account.address + " " + (await account.getBalance())
    );
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    polygon: {
      url: `https://rpc-mainnet.maticvigil.com`,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      chainId: 137,
    },
    polygon_mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      chainId: 80001,
    },
  },
  namedAccounts: {
    deployer: 0,
    simpleERC20Beneficiary: 1,
  },
};

export default config;