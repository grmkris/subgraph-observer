import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, simpleERC20Beneficiary } = await getNamedAccounts();

  // cost to mint is 10 matic tokens
  await deploy("ERC721SO", {
    from: deployer,
    args: [
      "SubgraphObserver",
      "SO",
      ethers.utils.parseEther("10"),
      "http//localhost:3000/",
    ],
    log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
  });
};
export default func;
