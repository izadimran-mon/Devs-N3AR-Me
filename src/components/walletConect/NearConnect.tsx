import * as nearAPI from "near-api-js";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { WalletContext } from "../../WalletContext";

const { connect, keyStores, WalletConnection } = nearAPI;

export const NearConnect = () => {
  const [wallet, setWallet] = useState<nearAPI.WalletConnection>();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const { isWalletConnected, setIsWalletConnected } = useContext(WalletContext);

  console.log("connected in wallet", isWalletConnected, wallet);

  const signIn = async () => {
    wallet?.requestSignIn(
      "example-contract.testnet" // contract requesting access
    );
    return;
  };

  const signOut = () => {
    if (!wallet) return;
    wallet.signOut();
    setIsSignedIn(false);
    setIsWalletConnected(false);
    return;
  };

  useEffect(() => {
    const connectionInit = async () => {
      const keyStore = new keyStores.BrowserLocalStorageKeyStore();
      const config = {
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
      };
      const near = await connect(config as any);
      const wallet = new WalletConnection(near, "devs-n3ar-me");
      setWallet(wallet);
      wallet.isSignedIn() ? setIsSignedIn(true) : setIsSignedIn(false);
      setIsWalletConnected(wallet.isSignedIn());
    };
    connectionInit();
  }, []);

  return (
    <>
      {isSignedIn ? (
        <>
          <div>Connected as: {wallet?.account().accountId}</div>
          <Button onClick={signOut}>sign out</Button>
        </>
      ) : (
        <>
          <div>Please connect your account!</div>
          <Button onClick={signIn}>connect</Button>
        </>
      )}
    </>
  );
};
