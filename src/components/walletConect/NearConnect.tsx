import * as nearAPI from "near-api-js";
import { useState, useEffect } from "react";
import { url } from "../../constant/constants";
const { connect, keyStores, WalletConnection } = nearAPI;

export const NearConnect = () => {
  const [wallet, setWallet] = useState<any>();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = async () => {
    wallet.requestSignIn(
      "example-contract.testnet" // contract requesting access
    );
    return;
  };

  const signOut = () => {
    if (!wallet) return;
    wallet.signOut();
    setIsSignedIn(false);
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
    };
    connectionInit();
  }, []);

  return (
    <>
      {isSignedIn ? (
        <>
          <div>hi! {wallet.account().accountId}</div>
          <button onClick={signOut}>sign out</button>
        </>
      ) : (
        <>
          <div>Please connect your account!</div>
          <button onClick={signIn}>connect</button>
        </>
      )}
    </>
  );
};
