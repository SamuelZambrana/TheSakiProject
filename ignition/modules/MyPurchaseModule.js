const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
require("dotenv").config({ path: ".env" });

const MyPurchaseModule = buildModule("MyPurchaseModule", (m) => {

    const contractAddress = process.env.SP_CONTRACT_ADDRESS; 
    const MyPurchase = m.contractAt("TheNewSakiPlace", contractAddress);  //instance of the contract, no []

    m.call(MyPurchase, "listNFT", [0, 10000000000000]);

    return { MyPurchase };

})

module.exports = MyPurchaseModule;

//calling the function "listNFT" to see the id and the price of the NFT