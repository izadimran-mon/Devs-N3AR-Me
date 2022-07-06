import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { AuroraTestnetChain } from "../../constant/constants";
import Button from "@mui/material/Button";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

export const AuroraConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState<ethers.Signer>();
  const [connectedAddr, setConnectedAddr] = useState<string>();

  const connectWallet = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    setSigner(signer);
    setConnectedAddr(await signer.getAddress());
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [AuroraTestnetChain],
    });
  };

  useEffect(() => {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => {
        if (accounts.length > 0) {
          setIsConnected(true);
        }
      });

    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
      if (accounts.length === 0) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    });
  }, []);

  return (
    <>
      {isConnected && connectedAddr ? (
        <div>
          Connected as:{" "}
          {connectedAddr.slice(0, 6) + "..." + connectedAddr.slice(38, 43)}
        </div>
      ) : (
        <Button variant="contained" onClick={connectWallet}>
          Connect to Metamask
        </Button>
      )}
    </>
  );
};
