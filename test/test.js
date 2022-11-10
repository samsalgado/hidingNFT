const {expect } = require('chai');

describe("Hiding", function(){
  it("SHOULD RETURN CORRECT NAME", async function() {
    const Hiding = await hre.ethers.getContractFactory("Hiding");
    const hidingDeployed = await Hiding.deploy("Hiding", "RASH");
    await hidingDeployed.deployed();
    expect(await hidingDeployed.name()).to.equal("Hiding");
  });
});
