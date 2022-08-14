import Button from "@mui/material/Button";
import { logout, login } from "../../util";

export const NearConnect = () => {
  return (
    <>
      {window.walletConnection.isSignedIn() ? (
        <>
          <div>Connected as: {window.accountId}</div>
          <Button onClick={logout}>sign out</Button>
        </>
      ) : (
        <>
          <div>Please connect your account!</div>
          <Button onClick={login}>connect</Button>
        </>
      )}
    </>
  );
};
