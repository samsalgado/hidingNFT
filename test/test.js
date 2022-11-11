const {expect } = require('chai');

describe("Hiding", function(){
  it("SHOULD RETURN CORRECT NAME AND SYMBOL", async function() {
    const Hiding = await hre.ethers.getContractFactory("Hiding");
    const hidingDeployed = await Hiding.deploy("Hiding");
    await hidingDeployed.deployed();
   expect (hidingDeployed.ERC721()).to.equal("Hiding", "RASH");
  });
});
