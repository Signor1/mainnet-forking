require("dotenv").config({ path: ".env" });
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// URL from alchemy
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const POLYGON_URL = process.env.POLYGON_URL;

const ALCHEMY_MAINNET_API_KEY_URL = process.env.ALCHEMY_MAINNET_API_KEY_URL;

//private of the wallet
const KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_API_KEY_URL,
      },
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${KEY}`],
    },
    mumbai: {
      url: POLYGON_URL,
      accounts: [`0x${KEY}`],
    },
  },
  etherscan: {
    // apiKey: process.env.ETHERSCAN_API_KEY,
    apiKey: {
      polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`,
    },
  },
};

export default config;
