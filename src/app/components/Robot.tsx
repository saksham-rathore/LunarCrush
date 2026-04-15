import React from 'react'
import { Lato, Instrument_Serif } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Robot = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl">
      <h1 className={`${inter.className} text-5xl md:text-7xl text-white font-medium tracking-tight leading-tight`}>
        Your social intelligence <br />
        <span className={`${instrument.className} text-violet-400 italic`}>command center</span>
      </h1>

      <div className={`${inter.className} text-xl md:text-2xl text-gray-400 mt-8 max-w-2xl`}>
        <p>Track, analyze and capitalize on market movements with a comprehensive suite of social analytics tools designed for the modern trader.</p>
      </div>
    </div>
  );
};

export default Robot;
