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
    <div className="pt-24 pb-12 flex flex-col items-center text-center">
      <h1 className={`${inter.className} text-7xl md:text-9xl text-white font-medium tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700`}>
        Social Media Impacts
      </h1>
      <h2 className={`${instrument.className} text-violet-400 text-7xl md:text-9xl italic mt-2 animate-in fade-in slide-in-from-bottom-5 duration-1000`}>
        CryptoCurrencies
      </h2>
      <div className={`${inter.className} text-xl md:text-2xl text-gray-400 mt-8 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300`}>
        <p>Start gaining an edge by asking anything you want. Real-time social intelligence at your fingertips.</p>
      </div>
    </div>
  );
};

export default Hero;
