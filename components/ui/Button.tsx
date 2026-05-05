"use client";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode, forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden rounded-full";

    const variants = {
      primary:
        "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] border border-accent/50",
      secondary:
        "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border border-white/10",
      outline: "border border-accent/50 text-accent hover:bg-accent/10",
      ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
