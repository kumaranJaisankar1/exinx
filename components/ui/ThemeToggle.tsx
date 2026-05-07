"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[60px] h-[34px]" />;

  return (
    <label className="relative inline-block w-[60px] h-[34px] cursor-pointer group">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className={cn(
        "absolute inset-0 transition-all duration-500 rounded-[34px] overflow-hidden shadow-inner",
        theme === "dark" ? "bg-[#07090f]" : "bg-[#4196f3]"
      )}>
        {/* Sun/Moon Container */}
        <div className={cn(
          "absolute h-[26px] w-[26px] left-[4px] bottom-[4px] transition-all duration-500 z-20",
          theme === "dark" ? "translate-x-[26px]" : "translate-x-0"
        )}>
          <div className={cn(
            "relative w-full h-full rounded-full transition-colors duration-500 shadow-[0_0_10px_rgba(255,219,80,0.5)]",
            theme === "dark" ? "bg-[#eee] shadow-[0_0_10px_rgba(255,255,255,0.2)]" : "bg-[#ffdb50]"
          )}>
            <div className={cn(
              "absolute inset-0 transition-opacity duration-500",
              theme === "dark" ? "opacity-100" : "opacity-0"
            )}>
              <div className="absolute top-[15%] left-[35%] w-[20%] h-[20%] bg-gray-400/40 rounded-full" />
              <div className="absolute top-[40%] left-[15%] w-[30%] h-[30%] bg-gray-400/40 rounded-full" />
              <div className="absolute top-[65%] left-[55%] w-[15%] h-[15%] bg-gray-400/40 rounded-full" />
            </div>

            <div className={cn(
              "absolute -inset-2 opacity-10 transition-opacity duration-500 pointer-events-none",
              theme === "dark" ? "opacity-0" : "opacity-10"
            )}>
              <div className="absolute inset-0 bg-white rounded-full scale-[1.2]" />
              <div className="absolute inset-0 bg-white rounded-full scale-[1.5]" />
            </div>
          </div>
        </div>

        <div className={cn(
          "absolute inset-0 transition-transform duration-500",
          theme === "dark" ? "translate-y-full" : "translate-y-0"
        )}>
           {/* Cloud 1 */}
           <svg className="absolute left-[50%] top-[40%] w-10 fill-white/80 animate-cloud-move" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
           {/* Cloud 2 */}
           <svg className="absolute left-[70%] top-[25%] w-5 fill-white/60 animate-cloud-move delay-1000" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
           {/* Cloud 3 */}
           <svg className="absolute left-[30%] top-[60%] w-7 fill-white/40 animate-cloud-move delay-500" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>
        </div>

        <div className={cn(
          "absolute inset-0 transition-transform duration-500",
          theme === "dark" ? "translate-y-0" : "-translate-y-full"
        )}>
          {[1, 2, 3, 4].map((i) => (
            <svg 
              key={i}
              className={cn(
                "absolute fill-white animate-star-twinkle",
                i === 1 && "w-5 top-[5px] left-[5px] delay-300",
                i === 2 && "w-1.5 top-[20px] left-[8px]",
                i === 3 && "w-3 top-[22px] left-[15px] delay-700",
                i === 4 && "w-4 top-[2px] left-[22px] delay-1000"
              )}
              viewBox="0 0 20 20"
            >
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes cloud-move {
          0%, 100% { transform: translateX(0px); }
          40% { transform: translateX(4px); }
          80% { transform: translateX(-4px); }
        }
        @keyframes star-twinkle {
          0%, 100% { transform: scale(1); }
          40% { transform: scale(1.2); }
          80% { transform: scale(0.8); }
        }
        .animate-cloud-move { animation: cloud-move 6s infinite; }
        .animate-star-twinkle { animation: star-twinkle 2s infinite; }
      `}</style>
    </label>
  );
}
