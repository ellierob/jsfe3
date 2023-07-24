// import fs from "fs-extra";
// import { fs } from "react";
// import fs from "fs.realpath";
// import { readFile } from 'fs/promises'

// import abiJson from "../../external/contracts/fundMe.sol/FundMe.json"
// import abiJson from "../../external/FundMe.json"
// import abiJson from "/home/gnostic/Golem/be/blockchain/artifacts/contracts/fundMe.sol/FundMe.json"
//  assert {type: "json"}
// ;
// import deployJson from "../../external/deployments/localhost/FundMe.json"
// import deployJson from "../../external/FundMe.deploy.json"
// import deployJson from "/home/gnostic/Golem/be/blockchain/deployments/localhost/FundMe.json"
//  assert {type: "json"}
// ;

export const abi =
    import.meta.env.REACT_APP_ABI;
// JSON.parse(
// await readFile(
//     new URL(
//         "../../external/contracts/fundMe.sol/FundMe.json",
//         import.meta.url
//     )
// )

// abiJson
// fs.readFileSync(
// "../../external/contracts/fundMe.sol/FundMe.json",
// "/home/gnostic/Golem/be/blockchain/artifacts/contracts/fundMe.sol/FundMe.json",
// "utf-8")
// )
// .abi;

export const contractAddr =
    import.meta.env.REACT_APP_CONTRACT_ADDRESS;
// JSON.parse(
// new URL(
//     "../../external/deployments/localhost/FundMe.json",
//     import.meta.url
// )
// deployJson
// fs.readFileSync(
// "../../external/deployments/localhost/FundMe.json",
// "/home/gnostic/Golem/be/blockchain/deployments/localhost/FundMe.json",
// "utf-8")
// )
// .address;

console.log("abi:", abi, "\n\ncontractAddr:", contractAddr);