"use client";

import { useEffect } from "react";

export default function HomeThemeWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("home-theme");
    return () => document.body.classList.remove("home-theme");
  }, []);

  return <>{children}</>;
}
