"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { AICore } from "@/components/3d/AICore";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-accent backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Pure EduTech Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Extended <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              Intelligence Ecosystem
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-secondary max-w-xl font-light"
          >
            Home of <span className="text-white font-medium">Nova</span>, <span className="text-white font-medium">Orbis</span>, and <span className="text-white font-medium">Astra</span>. We engineer high-performance AI solutions designed to revolutionize the educational landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="gap-2">
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg">
              Book Consultation
            </Button>
          </motion.div>
        </div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative h-[500px] w-full max-w-[600px] mx-auto hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 blur-[100px] rounded-full" />
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <Suspense fallback={null}>
              <AICore />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
