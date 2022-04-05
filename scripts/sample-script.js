const hre = require("hardhat");

async function main() {

  const DevsN3ARMe = await hre.ethers.getContractFactory("DevsN3ARMe");
  const devsN3ARMe = await DevsN3ARMe.deploy();

  await devsN3ARMe.deployed();

  console.log("My NFT deployed to:", devsN3ARMe.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });