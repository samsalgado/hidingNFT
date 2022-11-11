const { ethers } = require("hardhat");

async function main() {
  const Hiding = await ethers.getContractFactory("Hiding");
  const hiding = await Hiding.deploy();
  console.log("CONTRACT ADDRESS: ", hiding.address);
}
main()
.then(() => process.exit(0))
.catch((error) => {console.error(error)
  process.exit(1)
})