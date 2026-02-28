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
    <div className={`${inter.className} text-5xl text-white pt-50 tracking-wide`}>
      <h1>Your social intelligence <span className={`${instrument.className} text-5xl text-violet-400`}>command center</span></h1>

      <div className={`${inter.className} text-2xl text-white pt-6`}>
      <p className='text-gray-500'>Track, analyze and capitalize on market movements with a comprehensive suite of social analytics tools.</p>
      </div>
    </div>
  )
}

export default Robot
