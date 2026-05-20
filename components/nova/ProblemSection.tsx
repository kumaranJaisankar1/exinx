"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Deterministic seeded random helper to satisfy React purity rules
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function NeuralCore({ scrollProgress }: { scrollProgress: any }) {
  const group = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);

  const nodes = useMemo(() => {
    return [...Array(15)].map((_, i) => {
      const randX = seededRandom(i * 10 + 1);
      const randY = seededRandom(i * 10 + 2);
      const randZ = seededRandom(i * 10 + 3);
      const randSpeed = seededRandom(i * 10 + 4);
      const randOffset = seededRandom(i * 10 + 5);

      return {
        position: [
          (randX - 0.5) * 10,
          (randY - 0.5) * 10,
          (randZ - 0.5) * 10
        ] as [number, number, number],
        speed: 0.2 + randSpeed * 0.5,
        offset: randOffset * Math.PI * 2
      };
    });
  }, []);

  const connections = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const randRotX = seededRandom(i * 20 + 1);
      const randRotY = seededRandom(i * 20 + 2);
      const randRad = seededRandom(i * 20 + 3);

      return {
        rotation: [randRotX * Math.PI, randRotY * Math.PI, 0] as [number, number, number],
        torusArgs: [4 + randRad * 1.5, 0.01, 16, 100] as [number, number, number, number]
      };
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollProgress.get();

    group.current.rotation.y = t * 0.05 + scroll * Math.PI;
    group.current.rotation.z = Math.sin(t * 0.2) * 0.1;

    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05 + scroll * 0.5);
    }
  });

  return (
    <group ref={group}>
      {/* Central Neural Pulse */}
      <Sphere ref={coreRef} args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#f97316"
          speed={4}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.15}
          emissive="#f97316"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Outer Glow Sphere */}
      <Sphere args={[2.6, 32, 32]}>
        <meshBasicMaterial color="#f97316" transparent opacity={0.05} wireframe />
      </Sphere>

      {/* Orbiting Data Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed * 2} rotationIntensity={2} floatIntensity={2}>
          <Sphere position={node.position} args={[0.15, 16, 16]}>
            <meshStandardMaterial
              color="#f97316"
              emissive="#f97316"
              emissiveIntensity={2}
            />
          </Sphere>
        </Float>
      ))}

      {/* Connections (Subtle Neural Paths) - Slightly reduced scale to fit better */}
      {connections.map((conn, i) => (
        <group key={i} rotation={conn.rotation}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={conn.torusArgs} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

const NarrativeBlock = ({ title, highlight, description, label, opacity, y }: any) => (
  <motion.div
    style={{ opacity, y }}
    className="absolute w-full max-w-xl"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-orange-500/50" />
        <span className="font-mono text-xs text-orange-400 tracking-[0.4em] uppercase">{label}</span>
      </div>

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground uppercase tracking-[0.1em]">
        {title} <br />
        <span className="font-extrabold text-primary block mt-2">{highlight}</span>
      </h2>

      <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-md">
        {description}
      </p>

      <div className="flex gap-4 mt-4">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20" />
      </div>
    </div>
  </motion.div>
);

const ProblemSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const frameId = requestAnimationFrame(() => {
      setMounted(true);
      checkMobile();
    });

    window.addEventListener("resize", checkMobile);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity1 = useTransform(smoothProgress, [0, 0.2, 0.3], [0, 1, 0]);
  const opacity2 = useTransform(smoothProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);

  const y1 = useTransform(smoothProgress, [0, 0.2, 0.3], [20, 0, -20]);
  const y2 = useTransform(smoothProgress, [0.4, 0.6, 0.7], [20, 0, -20]);
  const y3 = useTransform(smoothProgress, [0.8, 0.95], [20, 0]);

  return (
    <>
      {/* Mobile Layout (Visible only on mobile/tablet) */}
      <section className="lg:hidden relative h-auto bg-[#07080a] py-24 px-6 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Orange Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#D97706]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10 flex flex-col gap-16">
          {/* Section Introduction */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D97706] font-bold">The Core Challenge</span>
            <h2 className="text-3xl font-serif text-white leading-tight">
              Reimagining How We <br />
              <span className="font-sans font-extrabold italic text-[#D97706]">Acquire Knowledge</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#D97706]/60 mt-2" />
          </div>

          {/* Vertical Stack of Narrative Blocks */}
          <div className="flex flex-col gap-10">
            {/* Block 1 */}
            <div className="flex flex-col gap-4 border-l border-[#D97706]/30 pl-6 relative">
              <div className="absolute -left-[4px] top-1.5 w-2 h-2 rounded-full bg-[#D97706] shadow-md shadow-[#D97706]/80 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">01 / Product Layer</span>
              <h3 className="text-2xl font-light text-white uppercase tracking-wider leading-tight">
                A learning system that <br />
                <span className="font-extrabold text-[#D97706] block mt-1">Thinks like you do.</span>
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Traditional learning systems are built around content. Nova is built around the student.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-4 border-l border-[#D97706]/30 pl-6 relative">
              <div className="absolute -left-[4px] top-1.5 w-2 h-2 rounded-full bg-[#D97706]/50" />
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">02 / Cognitive Patterns</span>
              <h3 className="text-2xl font-light text-white uppercase tracking-wider leading-tight">
                Processing is <br />
                <span className="font-extrabold text-[#D97706] block mt-1">Multifaceted.</span>
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Every learner has a unique way of processing information. Some require simplified breakdowns, others need structured logic or conceptual depth. Nova identifies these patterns and adapts continuously.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col gap-4 border-l border-[#D97706]/30 pl-6 relative">
              <div className="absolute -left-[4px] top-1.5 w-2 h-2 rounded-full bg-[#D97706]/30" />
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">03 / Personalized Layer</span>
              <h3 className="text-2xl font-light text-white uppercase tracking-wider leading-tight">
                Rooted in <br />
                <span className="font-extrabold text-[#D97706] block mt-1">Real Understanding.</span>
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Instead of forcing a uniform explanation, Nova builds a personalized learning layer around each student. It understands your pace, response patterns, and comprehension level, refining its teaching accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout (Visible only on larger screens) */}
      <section id="product-section" ref={targetRef} className="hidden lg:block relative h-[400vh] bg-background">
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          {/* Left Side: Cinematic Narrative */}
          <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-full flex flex-col justify-center z-10">
            <NarrativeBlock
              label="Product"
              title="A Learning System That"
              highlight="Thinks Like You Do."
              description="Traditional learning systems are built around content. Nova is built around the student."
              opacity={opacity1}
              y={y1}
            />

            <NarrativeBlock
              label="Cognitive Patterns"
              title="Processing "
              highlight="Multifaceted."
              description="Every learner has a unique way of processing information. Some require simplified breakdowns, others need structured logic or conceptual depth. Nova identifies these patterns and adapts continuously."
              opacity={opacity2}
              y={y2}
            />

            <NarrativeBlock
              label="Personalized Layer"
              title="Rooted"
              highlight="Understanding."
              description="Instead of forcing a uniform explanation, Nova builds a personalized learning layer around each student. It understands your pace, response patterns, and comprehension level, refining its teaching accordingly"
              opacity={opacity3}
              y={y3}
            />
          </div>

          {/* Right Side: Premium Neural Core Visualization */}
          <div className="w-full lg:w-1/2 h-screen relative group flex items-center justify-center overflow-hidden lg:overflow-visible">
            <div className="absolute inset-0 pointer-events-none -mr-[20vw] lg:-mr-[10vw]">
              {mounted && !isMobile && (
                <Canvas camera={{ position: [0, 0, 22], fov: 45 }} gl={{ alpha: true }} dpr={[1, 1.5]}>
                  <ambientLight intensity={0.2} />
                  <pointLight position={[10, 10, 10]} intensity={2} color="#f97316" />
                  <pointLight position={[-10, -10, -10]} intensity={1} color="#60d0f0" />

                  <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <NeuralCore scrollProgress={smoothProgress} />
                  </Float>
                </Canvas>
              )}
            </div>

            {/* Futuristic UI HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                style={{ rotate: useTransform(smoothProgress, [0, 1], [0, 360]) }}
                className="w-[450px] h-[450px] border border-white/5 rounded-full flex items-center justify-center"
              >
                <div className="w-[350px] h-[350px] border border-orange-500/10 rounded-full" />
              </motion.div>

              {/* Floating Data Indicators */}
              <div className="absolute top-1/4 right-0 lg:right-[-5vw] flex flex-col gap-2 items-end">
                <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Cognitive Load</span>
                <div className="h-px w-24 bg-gradient-to-l from-white/10 to-transparent" />
              </div>
              <div className="absolute bottom-1/4 left-0 lg:left-[-5vw] flex flex-col gap-2 items-start">
                <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Neural Density</span>
                <div className="h-px w-24 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Text Decal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
          <h2 className="text-[25vw] font-black uppercase leading-none">NOVA</h2>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
