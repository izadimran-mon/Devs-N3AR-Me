import { useEffect, useState, MouseEvent } from "react";
import { AuroraConnect } from "./walletConect/AuroraConnect";
import { NearConnect } from "./walletConect/NearConnect";

import logo from "../assets/logo.png";
import ConnectWallet from "./walletConect/ConnectWallet";

import IconButton from "@mui/material/IconButton";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { ethers } from "ethers";

const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#2b2b2b",
      color: "white",
      "& .MuiMenu-list": {
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
      },
    },
  })
);

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  return (
    <div className="flex sticky top-0 text-white">
      <div className="logoCover w-full h-32 ml-5 overflow-hidden">
        <img src={logo} alt="logo" className=" w-40 h-40 object-cover" />
      </div>
      <div className="mobileMenu flex md:hidden">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="h-1/2 w-16"
          style={{
            color: "white",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "2rem",
            backgroundColor: "#1a1a1a",
          }}
        >
          <MenuIcon className=" text-lg" />
        </IconButton>
        <StyledMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* <a
            href="/about"
            className="font-bold flex justify-center items-center"
            onClick={handleClose}
          >
            About us
          </a> */}
          <ConnectWallet provider={provider} />
        </StyledMenu>
      </div>
      <div className="menu hidden md:flex flex-row ml-auto my-auto mr-5 gap-3">
        {/* <a
          href="/about"
          className=" w-32 font-bold flex justify-center items-center"
        >
          About us
        </a> */}
        <ConnectWallet provider={provider} />
      </div>
      {/* <div className="connectWallet">Connect Aurora</div>
      <AuroraConnect />
      <div className="connectWallet">Connect Near</div>
      <NearConnect /> */}
    </div>
  );
}

export default Header;
