import React from "react";
import { Lato,Instrument_Serif } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div>
      <h1 className={`${inter.className} text-8xl text-white pt-45`}>
        Social Media Impacts
      </h1>
      <h2 className={`${instrument.className} text-white text-8xl pt-5`}>
        CryptoCurrencies
      </h2>
      <div className={`${inter.className} text-2xl text-white pt-5`}>
        <p>Start gaining an edge by asking anything you want.</p>
      </div>
    </div>
  );
};

export default Hero;
