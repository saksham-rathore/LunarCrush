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
    <div className="pt-32 pb-20">
      <div className="text-white text-5xl md:text-7xl leading-tight inline-block">
        <h1 className={`${inter.className} font-medium tracking-tight`}>
          Solutions for{" "}
          <span className={`${instrument.className} text-violet-400 italic`}>
            Solo Traders to Global Firms
          </span>
        </h1>
      </div>

      <div
        className={`${inter.className} text-gray-400 text-xl md:text-2xl leading-relaxed pt-8 pb-12 max-w-3xl`}
      >
        <p>
          Get powerful metrics on social activity, trends, sentiment, and
          influence, helping individuals and organizations of all sizes
          to track what’s attracting attention in real-time.
        </p>
      </div>

      <div className="h-[400px] w-full rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent"></div>
        <div className="h-full w-1/3 bg-white/[0.02] border-r border-white/5 backdrop-blur-2xl p-8">
           <div className="space-y-4">
              <div className="h-2 w-24 bg-violet-500/50 rounded-full"></div>
              <div className="h-2 w-32 bg-white/20 rounded-full"></div>
              <div className="h-2 w-20 bg-white/10 rounded-full"></div>
           </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
           <div className="text-white/40 text-sm font-mono tracking-widest uppercase">Social Analytics Engine v2.0</div>
           <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
           </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Herosec2;
