import { AuroraConnect } from "./walletConect/AuroraConnect";
import { NearConnect } from "./walletConect/NearConnect";

function Header() {
  return (
    <>
      <div className="connectWallet">Connect Aurora</div>
      <AuroraConnect />
      <div className="connectWallet">Connect Near</div>
      <NearConnect />
    </>
  );
}

export default Header;
