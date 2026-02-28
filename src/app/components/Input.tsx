"use client";
import React from "react";

const Input = () => {
  return (
    <div className="w-150 pt-10 flex flex-col items-center">
      <input
        type="text"
        placeholder="Ask anything"
        className="bg-transparent outline-none text-white text-3xl placeholder-gray-400 w-full border border-violet-600 hover:border-violet-300 p-4 rounded"
      />
    </div>
  );
};

export default Input;
