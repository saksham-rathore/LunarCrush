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
          className={`${lora.className} text-5xl text-white pt-90 text-center tracking-wide`}
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

          <div className="w-100 h-60 bg-white rounded-xl"></div>
          <div className="w-100 h-60 bg-white rounded-xl"></div>

        </div>

        <div className="flex-row">

          <div className="w-100 h-60 bg-white rounded-xl"></div>
          <div className="w-100 h-60 bg-white rounded-xl"></div>

        </div>

        <div className="flex-row">

          <div className="w-100 h-60 bg-white rounded-xl"></div>
          <div className="w-100 h-60 bg-white rounded-xl"></div>

        </div>
      </div>
    </>
  );
};

export default Icons;
