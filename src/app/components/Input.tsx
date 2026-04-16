"use client";
import React from "react";
import { motion } from "framer-motion";

const Input = () => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-12">
      <div className="relative group overflow-hidden rounded-2xl">
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
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 z-0 pointer-events-none"
        />

        <input
          type="text"
          placeholder="Ask anything..."
          className="bg-white/5 backdrop-blur-md outline-none text-white text-2xl placeholder-gray-500 w-full border border-violet-600/30 hover:border-violet-500/50 focus:border-violet-500 p-6 pr-16 rounded-2xl transition-all duration-500 relative z-10"
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

        {/* Bottom Border Beam Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </div>
  );
};

export default Input;
