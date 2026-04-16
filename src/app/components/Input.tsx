"use client";
import React from "react";
import { motion } from "framer-motion";

const Input = () => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-12">
      <div className="relative group rounded-2xl p-[1px] overflow-hidden">
        {/* Border Shining Animation (Rotating Beam) */}
        <div className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0,transparent_25%,#a78bfa_50%,transparent_75%,transparent_100%)]"
          />
        </div>

        {/* Inner container to hold input and maintain backdrop blur */}
        <div className="relative rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden">
          {/* Shimmer/Gradient Shine Animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              repeatDelay: 1
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 z-0 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Ask anything..."
            className="bg-transparent outline-none text-white text-2xl placeholder-gray-500 w-full p-6 pr-16 transition-all duration-500 relative z-10"
          />
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-violet-500 group-hover:text-violet-400 transition-colors z-20">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </motion.div>
          </div>

          {/* Static Border (when not hovered) */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-transparent transition-colors z-30 pointer-events-none" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-violet-600/5 blur-xl group-hover:bg-violet-600/10 transition-colors duration-500 -z-10" />
      </div>
    </div>
  );
};

export default Input;
