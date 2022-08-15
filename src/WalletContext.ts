import React from "react";

export const WalletContext = React.createContext<{isWalletConnected: boolean, setIsWalletConnected: (a: boolean)=>void}>({
  isWalletConnected: false,
  setIsWalletConnected: ()=> {}
});
