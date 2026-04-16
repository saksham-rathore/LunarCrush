"use client";
import React from "react";
import { Lora, Instrument_Serif } from "next/font/google";
import { motion } from "framer-motion";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Icons = () => {
  const iconData = [
    { src: "/tradingview.svg", alt: "TradingView", span: 1 },
    { src: "/ethereum.png", alt: "Ethereum", span: 1 },
    { src: "/usdc.png" , alt: "USDC", span: 1 },
    { src: "/xrp.png", alt: "XRP", span: 1 },
    { src: "/dollar.png", alt: "Dollar", span: 1 },
    { src: "/btc.png", alt: "BTC", span: 1 },
  ];

  return (
    <>
    <div className="pt-32 pb-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${lora.className} text-4xl md:text-6xl text-white tracking-wide leading-tight`}
        >
          Loved by{" "}
          <span className={`${instrument.className} text-violet-400 italic`}>
            Customers and Enterprises
          </span>{" "}
          Around the World
        </motion.h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          [iconData[0], iconData[1]], 
          [iconData[2], iconData[3]], 
          [iconData[4], iconData[5]]
        ].map((column, colIdx) => (
          <div key={colIdx} className={`flex flex-col gap-6 ${colIdx === 1 ? "md:mt-12" : ""}`}>
            {column.map((icon, i) => (
              <motion.div 
                key={icon.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (colIdx * 2 + i) * 0.1 }}
                className="h-48 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Animated Scanning Line */}
                <motion.div
                  animate={{ 
                    top: ["-10%", "110%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: (colIdx * 2 + i) * 0.5 
                  }}
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent z-10 blur-[1px]"
                />

                {/* Blink/Flicker Animation Container */}
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.4, 1, 0.8, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="relative z-20"
                >
                  <motion.img 
                    src={icon.src} 
                    alt={icon.alt} 
                    className="w-40 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Subtle Glow behind logo when blinking */}
                  <div className="absolute inset-0 bg-violet-500/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Subtle corner light */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-violet-600/10 blur-[40px] rounded-full group-hover:bg-violet-600/20 transition-all" />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Icons;
