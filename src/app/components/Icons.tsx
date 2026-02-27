import React from "react";
import { Lora, Instrument_Serif } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Icons = () => {
  return (
    <>
      <div className="text-white">
        <h1
          className={`${lora.className} text-6xl text-white pt-90 text-center tracking-wide`}
        >
          Loved by{" "}
          <span className={`${instrument.className}`}>
            Customers and Enterprises{" "}
          </span>
          Around the World
        </h1>
      </div>
      
      <div className="flex justify-center pt-10"> 
        <div className="flex-row">

          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="tradingview.svg" alt="logo" className="w-44 h-44"/>
          </div>
         
          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="ethereum.png" alt="logo" className="w-54 h-54"/>
          </div>

        </div>

        <div className="flex-row">

          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="usdc.png" alt="logo" className="w-44 h-44" />
          </div>
          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="xrp.png" alt="logo" className="w-44 h-44"/>
          </div>

        </div>

        <div className="flex-row">

          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="dollar.png" alt="logo" className="w-44 h-44"/>
          </div>
          <div className="w-100 h-60 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl m-2 flex items-center justify-center">
          <img src="btc.png" alt="logo" className="w-44 h-44"/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Icons;