"use client";
import React, { useState } from "react";
import { Zap, Code, Compass, Copy, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IntegrationSection = () => {
  const [activeTab, setActiveTab] = useState("CONNECT");
  const [activeModel, setActiveModel] = useState("Claude");

  const models = [
    "Claude", "ChatGPT", "Gemini", "Grok", "Perplexity", 
    "Manus", "Minimax", "Kimi", "deepseek"
  ];

  const integrations = [
    { name: "ANTHROPIC", logo: "/anthropic.png" },
    { name: "COINBASE", logo: "/coinbase.png" },
    { name: "GOOGLE", logo: "/google.png" }
  ];

  return (
    <div className="py-32 flex flex-col items-center relative group">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-all duration-1000"></div>
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="w-full max-w-4xl bg-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
        {/* Shine Overlay Effect */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 z-20 pointer-events-none"
        />

        {/* Top Border Beam Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-30"></div>
        
        {/* Side Glow Line */}
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        
        {/* Tab Headers */}
        <div className="flex border-b border-white/5">
          {[
            { id: "CONNECT", icon: Zap },
            { id: "BUILD", icon: Code },
            { id: "DISCOVER", icon: Compass }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-6 text-sm font-bold tracking-widest transition-all relative ${
                activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? "text-blue-400" : ""} />
              {tab.id}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === "CONNECT" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Model Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {models.map((model) => (
                    <motion.button
                      key={model}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveModel(model)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-all relative group/tag ${
                        activeModel === model
                          ? "bg-blue-600/30 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {model}
                    </motion.button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex border-y border-white/5 -mx-8 py-4 px-8 mb-8 bg-white/[0.01]">
                  <button className="flex-1 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-all hover:gap-3">
                    <Copy size={16} />
                    Copy & paste into {activeModel}
                  </button>
                  <div className="w-px bg-white/5" />
                  <button className="flex-1 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-all hover:gap-3">
                    Try it now <ArrowRight size={16} />
                  </button>
                </div>

                {/* Prompt Box */}
                <div className="bg-[#050608]/80 p-6 rounded-2xl border border-white/5 relative overflow-hidden group/prompt">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/prompt:opacity-100 transition-opacity duration-500" />
                  <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                    Connect me to the LunarCrush MCP <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">https://claude.ai/directory/837cceff...</span> If not installed help me set up. Use LunarCrush as default tool for real-time social data. Let me know if I need an account to access full data <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">https://lunarcrush.com/pricing</span>. Then show me 5 example prompts I can ask using live social intelligence.
                  </p>
                </div>
              </motion.div>
            )}
            
            {activeTab !== "CONNECT" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-64 flex items-center justify-center text-gray-600 italic font-mono"
              >
                {activeTab} module content coming soon...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Integrated With section */}
      <div className="mt-20 flex flex-col items-center">
        <h3 className="text-gray-600 text-xs font-bold tracking-[0.3em] uppercase mb-8">
          INTEGRATED WITH
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 contrast-125 saturate-0 hover:saturate-100 hover:opacity-100 transition-all duration-700">
           {/* Partner Logos with subtle animations */}
           <motion.div whileHover={{ y: -5 }} className="flex items-center gap-2 scale-110 cursor-pointer">
              <span className="text-2xl font-bold text-white tracking-widest bg-clip-text">ANTHROP\C</span>
           </motion.div>
           <motion.div whileHover={{ y: -5 }} transition={{ delay: 0.1 }} className="flex items-center gap-2 scale-110 cursor-pointer">
              <span className="text-2xl font-black text-white tracking-tighter italic">coinbase</span>
           </motion.div>
           <motion.div whileHover={{ y: -5 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 scale-110 cursor-pointer">
              <span className="text-2xl font-medium text-white tracking-tight">Google</span>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
