import React from "react";

const Herosection = () => {
  return (
    <div className="py-20 w-full relative overflow-hidden">
      {/* Side Opacity Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-8 px-4">
        {[
          "ai_1.png", "ai_2.png", "ai_3.png", "ai_4.png", "ai_5.png"
        ].map((img, index) => (
          <img 
            key={index} 
            src={`/${img}`} 
            alt={`AI Data Visual ${index + 1}`} 
            className="h-[450px] w-auto rounded-3xl object-cover shadow-2xl border border-white/10 transition-all duration-700 hover:scale-110" 
          />
        ))}
        {/* Duplicate for seamless loop */}
        {[
          "ai_1.png", "ai_2.png", "ai_3.png", "ai_4.png", "ai_5.png"
        ].map((img, index) => (
          <img 
            key={`dup-${index}`} 
            src={`/${img}`} 
            alt={`AI Data Visual ${index + 1}`} 
            className="h-[450px] w-auto rounded-3xl object-cover shadow-2xl border border-white/10 transition-all duration-700 hover:scale-110" 
          />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
