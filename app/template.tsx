import { CinematicLoader } from "@/components/CinematicLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CinematicLoader />
      {children}
    </>
  );
}
