"use client";
import React from "react";

const Input = () => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-12">
      <div className="relative group">
        <input
          type="text"
          placeholder="Ask anything..."
          className="bg-white/5 backdrop-blur-md outline-none text-white text-2xl placeholder-gray-500 w-full border border-violet-600/30 hover:border-violet-500/50 focus:border-violet-500 p-6 pr-16 rounded-2xl transition-all duration-300"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-violet-500 group-hover:text-violet-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </div>
      </div>
    </div>
  );
};

export default Input;
