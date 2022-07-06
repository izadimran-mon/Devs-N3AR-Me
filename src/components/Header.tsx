import { AuroraConnect } from "./walletConect/AuroraConnect";
import { NearConnect } from "./walletConect/NearConnect";
import logo from "../assets/logo.png";
import ConnectWallet from "./walletConect/ConnectWallet";

function Header() {
  return (
    <div className="flex sticky top-0 text-white">
      <div className="logoCover w-full h-32 ml-5 overflow-hidden">
        <img src={logo} alt="logo" className=" w-40 h-40 object-cover" />
      </div>
      <div className="menu flex flex-row ml-auto my-auto mr-5 gap-3">
        <a
          href="/about"
          className=" w-32 font-bold flex justify-center items-center"
        >
          About us
        </a>
        <ConnectWallet />
      </div>
      {/* <div className="connectWallet">Connect Aurora</div>
      <AuroraConnect />
      <div className="connectWallet">Connect Near</div>
      <NearConnect /> */}
    </div>
  );
}

export default Header;
