import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { Account, Contract, Near, WalletConnection } from "near-api-js";

import { initContract } from "./util";

import * as buffer from "buffer";

// issue of near-api-js
// https://github.com/near/near-api-js/issues/757
(window as any).Buffer = buffer.Buffer;

declare global {
  interface Window {
    near: Near;
    walletConnection: WalletConnection;
    accountId: string;
    account: Account;
    contract: Contract;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
initContract()
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  })
  .catch(console.error);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
