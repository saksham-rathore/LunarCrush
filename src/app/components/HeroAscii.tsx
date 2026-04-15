"use client";
import React, { useEffect, useRef } from "react";

const HeroAscii = () => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let A = 0, B = 0;
    const chars = ".,-~:;=!*#$@";
    
    const renderFrame = () => {
      const b: string[] = [];
      const z: number[] = [];
      const width = 80;
      const height = 40;
      
      for (let k = 0; k < width * height; k++) {
        b[k] = " ";
        z[k] = 0;
      }

      // Torus parameters
      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;

          const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
          const o = x + width * y;
          const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

          if (height > y && y > 0 && x > 0 && width > x && D > z[o]) {
            z[o] = D;
            b[o] = chars[N > 0 ? N : 0];
          }
        }
      }

      if (preRef.current) {
        let output = "";
        for (let k = 0; k < width * height; k++) {
          output += b[k] + (k % width === width - 1 ? "\n" : "");
        }
        preRef.current.innerHTML = output;
      }

      A += 0.04;
      B += 0.02;
    };

    const interval = setInterval(renderFrame, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] pointer-events-none select-none">
      <pre
        ref={preRef}
        className="font-mono text-[8px] leading-[8px] text-blue-500 whitespace-pre"
        style={{ textShadow: "0 0 5px rgba(59, 130, 246, 0.5)" }}
      />
    </div>
  );
};

export default HeroAscii;
