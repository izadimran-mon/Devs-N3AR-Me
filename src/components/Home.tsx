import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Button from "@mui/material/Button";

import Header from "./Header";
import DNM1 from "../assets/DNM Eggs/DNM Eggs/1.webp";
import DNM2 from "../assets/DNM Eggs/DNM Eggs/2.webp";
import DNM3 from "../assets/DNM Eggs/DNM Eggs/3.webp";
import DNM4 from "../assets/DNM Eggs/DNM Eggs/4.webp";
import DNM5 from "../assets/DNM Eggs/DNM Eggs/5.webp";
import DNM6 from "../assets/DNM Eggs/DNM Eggs/6.webp";
import DNM7 from "../assets/DNM Eggs/DNM Eggs/7.webp";
import DNM8 from "../assets/DNM Eggs/DNM Eggs/8.webp";
import DNM9 from "../assets/DNM Eggs/DNM Eggs/9.webp";
import DNM10 from "../assets/DNM Eggs/DNM Eggs/10.webp";
import DNM11 from "../assets/DNM Eggs/DNM Eggs/11.webp";
import DNM12 from "../assets/DNM Eggs/DNM Eggs/12.webp";
import DNM13 from "../assets/DNM Eggs/DNM Eggs/13.webp";
import DNM14 from "../assets/DNM Eggs/DNM Eggs/14.webp";
import DNM15 from "../assets/DNM Eggs/DNM Eggs/15.webp";
import DNM16 from "../assets/DNM Eggs/DNM Eggs/16.webp";
import DNM17 from "../assets/DNM Eggs/DNM Eggs/17.webp";
import DNM18 from "../assets/DNM Eggs/DNM Eggs/18.webp";
import DNM19 from "../assets/DNM Eggs/DNM Eggs/19.webp";
import DNM20 from "../assets/DNM Eggs/DNM Eggs/20.webp";
import DNM21 from "../assets/DNM Eggs/DNM Eggs/21.webp";
import { WalletContext } from "../WalletContext";

function Home() {
  const nfts: { image: string }[] = [
    { image: DNM1 },
    { image: DNM2 },
    { image: DNM3 },
    { image: DNM4 },
    { image: DNM5 },
    { image: DNM6 },
    { image: DNM7 },
    { image: DNM8 },
    { image: DNM9 },
    { image: DNM10 },
    { image: DNM11 },
    { image: DNM12 },
    { image: DNM13 },
    { image: DNM14 },
    { image: DNM15 },
    { image: DNM16 },
    { image: DNM17 },
    { image: DNM18 },
    { image: DNM19 },
    { image: DNM20 },
    { image: DNM21 },
  ];
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const walletSettings = {
    isWalletConnected,
    setIsWalletConnected,
  };

  console.log("connected in home", walletSettings.isWalletConnected);

  return (
    <WalletContext.Provider value={walletSettings}>
      <div className="w-screen h-screen bg-black text-white flex flex-col overflow-auto">
        <Header />
        <div className="texts flex flex-col items-center text-xl lg:px-36 text-center font-inter gap-4">
          <p className="px-4">
            Onboarding the next wave of Web 3.0 developers through outreach
            events and education initiatives.
          </p>
          <p>
            Mint one today and get a lifetime of free access to educational
            events!
          </p>
        </div>
        <Marquee
          gradient={false}
          speed={60}
          className="py-8 my-8"
          style={{
            backgroundColor: "#212121",
            paddingTop: "1.5rem",
          }}
        >
          {nfts.map((imageSource, index) => (
            <div className="h-48 w-32 mx-2" key={index}>
              <img
                src={imageSource.image}
                alt=""
                className=" h-full text-white object-scale-down"
              />
            </div>
          ))}
        </Marquee>
        <Button
          className="bg-[#00529D] text-white font-bold w-40 px-3 py-1 rounded-sm self-center my-5"
          variant="contained"
        >
          Join the pack
        </Button>
      </div>
    </WalletContext.Provider>
  );
}

export default Home;
