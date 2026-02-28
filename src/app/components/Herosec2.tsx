import React from "react";
import { Lato, Instrument_Serif } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Herosec2 = () => {
  return (
    <>
      <div className="text-white text-6xl pt-50 tracking-wide">
        <h1 className={`${inter.className}`}>
          Solutions for{" "}
          <span className={`${instrument.className} text-violet-400`}>
            Solo Traders to Global Firms
          </span>
        </h1>
      </div>

      <div
        className={`${inter.className} text-white text-2xl tracking-widest leading-snug pt-6 pb-10`}
      >
        <p className="text-gray-500">
          Get powerful metrics on social activity, trends, sentiment, and
          influence, helping individuals and <br /> organizations of all sizes
          to track what’s attracting attention.
        </p>
      </div>

      <div className="h-120 w-full rounded-xl bg-white/5 backdrop-blur-lg">
        <div className="h-full w-90 bg-white/1 backdrop-blur-lg"></div>
        <div className="text-white">

        </div>
      </div>
    </>
  );
};

export default Herosec2;
