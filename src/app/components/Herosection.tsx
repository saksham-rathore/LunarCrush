import React from "react";

const Herosection = () => {
  return (
    <div className="py-20 w-full overflow-hidden">
      <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-12">
        {[
          "BTC.avif", "crwallet.jpg", "candles.jpg", "bull.jpg", "ETH.jpg", 
          "Chart.jpg", "bearish.jpg", "risk.jpg", "Fail.jpg", "Again.jpg", 
          "Archery.jpg", "Archery.jpg", "$$$.jpg", "bearish.jpg", "bitcoin.jpg"
        ].map((img, index) => (
          <img 
            key={index} 
            src={`/${img}`} 
            alt={img} 
            className="h-[400px] w-auto rounded-2xl object-cover shadow-2xl transition-all duration-700 hover:scale-105" 
          />
        ))}
        {/* Duplicate for seamless loop */}
        {[
          "BTC.avif", "crwallet.jpg", "candles.jpg", "bull.jpg", "ETH.jpg", 
          "Chart.jpg", "bearish.jpg", "risk.jpg", "Fail.jpg", "Again.jpg", 
          "Archery.jpg", "Archery.jpg", "$$$.jpg", "bearish.jpg", "bitcoin.jpg"
        ].map((img, index) => (
          <img 
            key={`dup-${index}`} 
            src={`/${img}`} 
            alt={img} 
            className="h-[400px] w-auto rounded-2xl object-cover shadow-2xl transition-all duration-700 hover:scale-105" 
          />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
