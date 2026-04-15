"use client";
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
    <div className="pt-32 pb-20">
      <div className="text-center mb-16">
        <h1 className={`${lora.className} text-4xl md:text-6xl text-white tracking-wide leading-tight`}>
          Loved by{" "}
          <span className={`${instrument.className} text-violet-400 italic`}>
            Customers and Enterprises
          </span>{" "}
          Around the World
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/tradingview.svg" alt="TradingView" className="w-40 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/ethereum.png" alt="Ethereum" className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:mt-12">
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/usdc.png" alt="USDC" className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/xrp.png" alt="XRP" className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/dollar.png" alt="Dollar" className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-colors">
            <img src="/btc.png" alt="BTC" className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Icons;
