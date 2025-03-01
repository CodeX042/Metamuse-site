import ABI from "./cantract-abi.json"

import Web3 from 'web3';

const contractABI = ABI;
const contractAddress = "0x7Cc7216b13283A0D07413D4C720971FEFBe42240";

// Initialize Web3 instance
const web3 = new Web3(window.ethereum);

// Initialize the contract
export const nftContract = new web3.eth.Contract(contractABI, contractAddress);