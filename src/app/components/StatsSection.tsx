"use client";
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { label: "Social Posts Processed", value: "5M+", sub: "/day", desc: "Real posts, real people, real-time", color: "text-blue-400" },
    { label: "Topics Covered", value: "1M+", sub: "", desc: "Crypto, Stocks, Brands, People, Events", color: "text-purple-400" },
    { label: "Assets with Full Metrics", value: "25K+", sub: "", desc: "Price, volume, social & sentiment", color: "text-green-400" },
    { label: "Unique Creators Tracked", value: "100K+", sub: "/day", desc: "Across all networks, all categories", color: "text-orange-400" },
    { label: "Data Points per Asset", value: "20+", sub: "", desc: "Galaxy Score™, AltRank™, sentiment & more", color: "text-blue-300" },
    { label: "Networks Monitored", value: "6+", sub: "", desc: "X, Reddit, YouTube, TikTok, Instagram, News", color: "text-cyan-400" },
    { label: "Historical Depth", value: "8+", sub: "years", desc: "Full time-series across all metrics", color: "text-teal-400" },
    { label: "Update Frequency", value: "Real-time", sub: "", desc: "Continuous ingestion, not batch", color: "text-yellow-500" },
  ];

  const cryptoData = [
    { name: "XRP", metric: "Engagements: 4.1B" },
    { name: "AVAX", metric: "AltRank™: #14 ↑3" },
    { name: "LINK", metric: "Creators: 3.2K /24h" },
    { name: "DOT", metric: "Social Dom.: 1.8%" },
    { name: "BNB", metric: "Volume: $2.1B" },
    { name: "ADA", metric: "Sentiment: 65% Bullish" },
    { name: "DOGE", metric: "Mentions: 89K" },
  ];

  const stockData = [
    { name: "MSFT", metric: "Engagements: 1.8B" },
    { name: "AMZN", metric: "AltRank™: #7 ↑2" },
    { name: "META", metric: "Creators: 2.1K /24h" },
    { name: "GOOG", metric: "Social Dom.: 3.2%" },
    { name: "AMD", metric: "Mentions: 45K ↑31%" },
    { name: "PLTR", metric: "Sentiment: 68% Bullish" },
    { name: "COIN", metric: "Vol: $1.2B" },
  ];

  return (
    <div className="py-24 w-full">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 mb-32">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className={`text-5xl md:text-6xl font-bold tracking-tighter ${stat.color}`}>
                {stat.value}
              </span>
              {stat.sub && (
                <span className="text-gray-500 text-sm font-medium">{stat.sub}</span>
              )}
            </div>
            <h3 className="text-white font-bold text-lg mb-1">{stat.label}</h3>
            <p className="text-gray-500 text-sm font-medium">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Live Data Ticker Section */}
      <div className="space-y-12">
        <div className="flex items-center gap-2 mb-6">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-green-500 text-xs font-bold tracking-[0.2em] uppercase">Live Data</span>
        </div>

        {/* Cryptocurrencies */}
        <div className="relative">
          <h4 className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Cryptocurrencies</h4>
          <div className="border-t border-white/5 pt-6 overflow-hidden">
            <div className="flex animate-marquee-fast gap-12 whitespace-nowrap">
              {[...cryptoData, ...cryptoData].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{item.name}</span>
                  <span className="text-gray-500 text-sm">{item.metric}</span>
                  <span className="mx-4 text-white/10">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stocks */}
        <div className="relative">
          <h4 className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Stocks</h4>
          <div className="border-t border-white/5 pt-6 overflow-hidden">
            <div className="flex animate-marquee-slow gap-12 whitespace-nowrap">
              {[...stockData, ...stockData].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{item.name}</span>
                  <span className="text-gray-500 text-sm">{item.metric}</span>
                  <span className="mx-4 text-white/10">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
