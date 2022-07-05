import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import DevsN3ARMe from "../artifacts/contracts/DevsN3ARMe.sol/DevsN3ARMe.json";
import { contractAddress } from "../constant/constants";

import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default Home;
