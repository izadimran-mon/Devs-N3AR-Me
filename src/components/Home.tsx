import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Button from "@mui/material/Button";

import Header from "./Header";

function Home() {
  const nfts: { image: "" }[] = [
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
  ];

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col overflow-auto">
      <Header />
      <div className="texts flex flex-col items-center text-xl px-36 text-center font-inter gap-4">
        <p className="px-4">
          Onboarding the next wave of Web 3.0 developers through outreach events
          and education initiatives.
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
          <div className="h-48 w-32 mx-2">
            <img
              src={imageSource.image}
              alt=""
              className=" h-full text-white grayscale object-contain brightness-200 bg-slate-500"
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
  );
}

export default Home;
