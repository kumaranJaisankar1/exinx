"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={cn("w-[50px] h-[26px]", className)} />;

  return (
    <div className={cn("toggle-switch", className)}>
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={theme === "light"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slider">
          <span className="slider-icon shadow-sm flex items-center justify-center relative">
            <Sun className="icon sun-icon text-[#f59e0b]" strokeWidth={2.5} />
            <Moon className="icon moon-icon text-[#f1f5f9]" strokeWidth={2.5} />
          </span>
        </span>
      </label>

      <style jsx>{`
        .toggle-switch {
          position: relative;
          width: 50px;
          height: 26px;
          --light: #d8dbe0;
          --dark: #28292c;
        }

        .switch-label {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: transparent;
          border-radius: 13px;
          cursor: pointer;
          border: 2px solid var(--dark);
        }

        .checkbox {
          position: absolute;
          display: none;
        }

        .slider {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 13px;
          transition: background-color 0.3s;
        }

        .checkbox:checked ~ .slider {
          background-color: transparent;
        }

        .slider-icon {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #3f3f46;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s;
        }

        .checkbox:checked ~ .slider .slider-icon {
          transform: translateX(24px);
          background-color: white;
        }

        /* Icon Animations */
        .slider-icon :global(.icon) {
          position: absolute;
          width: 12px;
          height: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slider-icon :global(.sun-icon) {
          transform: scale(0) rotate(90deg);
          opacity: 0;
        }

        .slider-icon :global(.moon-icon) {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        .checkbox:checked ~ .slider .slider-icon :global(.sun-icon) {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        .checkbox:checked ~ .slider .slider-icon :global(.moon-icon) {
          transform: scale(0) rotate(-90deg);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
