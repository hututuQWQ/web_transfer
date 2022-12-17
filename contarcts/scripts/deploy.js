/** @format */

async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");

  // 开始部署，返回一个解析为合约对象的 promise
  const Transaction = await Transactions.deploy();
  console.log("Contract deployed to address:", Transaction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
