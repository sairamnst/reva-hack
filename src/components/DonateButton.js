import React,{useContext} from "react";
import './Main.css';
import 'tachyons';
import Sidenav1 from './Sidenav';
import { useState } from "react";

const ethers=require("ethers");
const {ethereum}=window

function Block(){
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState();
    async function sendTransaction() {
        let params=[{
            from:"0xd5e479263B745263E61Fb1318fa025fa7C4ae937",
            to:"0x58033e634C0aB34cDC45e6A0A8dfc54F135489c3",
            gas:Number(21000).toString(16),
            gasPrice:Number(2500000000).toString(16),
            value:Number(1000000000000000).toString(16),
        }]
        let result = await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>{
            console.log(err);
        })
    }
    async function connect() {
        if (typeof window.ethereum!=="undefined") {
            try {
                await ethereum.request({method:"eth_requestAccounts"});
                setIsConnected(true);
                let connectedProvider=new ethers.providers.BrowserProvider(window.ethereum);
                setSigner(connectedProvider.getSigner());
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            setIsConnected(false);
        }
    }
    async function execute() {
        if (typeof window.ethereum!=="undefined") {
            const contractAddress="0x58033e634C0aB34cDC45e6A0A8dfc54F135489c3";
            const provider=new ethers.providers.Web3Provider(window.ethereum);
            const signer=provider.getSigner();
            const abi=[
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "courses",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "target",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountCollected",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_title",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_description",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_target",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_deadline",
                            "type": "uint256"
                        }
                    ],
                    "name": "createCourse",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getCourses",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string",
                                    "name": "title",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "target",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "deadline",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amountCollected",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "paidMembers",
                                    "type": "address[]"
                                }
                            ],
                            "internalType": "struct SmartContract.Course[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getPaidMembers",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "",
                            "type": "address[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "noOfCourses",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "payForCourse",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                }
            ]
            const contract=new ethers.Contract(contractAddress,abi,signer);
            try {
                await contract.payForCourse(45465846);
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            document.getElementById("executeButton")
        }
    }
    return(
      <>
      <h1>Payment</h1>
      <button onClick={()=>connect()}>Connect</button>
      {isConnected ?
            <button onClick={()=>sendTransaction()}>Execute</button>
        : ""
      }
      </>
    );
}

export default Block;