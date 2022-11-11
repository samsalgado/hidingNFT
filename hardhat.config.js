require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
ALCHEMY_API_KEY = "WDx_Z8DYzJ2lyAOwr7CHfL647hhPEqnF";
const Goerli_key = "7ef15be65184ed5a15c82dd11aa5fdf5fe93b59e05d2c66c2d59186918a628eb";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url : `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [Goerli_key]
    }
}
};

