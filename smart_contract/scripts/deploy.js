const main = async () => {
  const deployedContract = await hre.ethers.deployContract('HelloWorld');
  await deployedContract.waitForDeployment();
  console.log('Contract Address:', deployedContract.target);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
