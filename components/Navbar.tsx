"use client"
import { usePathname } from "next/navigation";
import NovaNavbar from "./navbars/NovaNavbar";
import OrbisNavbar from "./navbars/OrbisNavbar";
import IyotaNavbar from "./navbars/IyotaNavbar";
import DefaultNavbar from "./navbars/DefaultNavbar";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/nova") {
    return <NovaNavbar />;
  }

  if (pathname === "/orbis" || pathname.startsWith("/orbis")) {
    return <OrbisNavbar />;
  }

  if (pathname === "/iyota" || pathname.startsWith("/iyota")) {
    return <IyotaNavbar />;
  }

  return <DefaultNavbar />;
}
