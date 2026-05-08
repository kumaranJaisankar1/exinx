"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore({ scrollProgress }: { scrollProgress: any }) {
  const group = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);

  const nodes = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2
    }));
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
      {[...Array(12)].map((_, i) => (
        <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[4 + Math.random() * 1.5, 0.01, 16, 100]} />
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
    <section id="product-section" ref={targetRef} className="relative h-[400vh] bg-background">
      {/* Removed overflow-hidden from sticky container to prevent clipping */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">

        {/* Left Side: Cinematic Narrative */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-full flex flex-col justify-center z-10">
          <NarrativeBlock
            label="Product"
            title="A Learning System That"
            highlight="Thinks Like You Do."
            description="Traditional learning systems are designed around content. Nova is designed around the student."
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
            title="Meaningful"
            highlight="Understanding."
            description="Instead of forcing a uniform explanation, Nova builds a personalized learning layer around each student. It understands your pace, response patterns, and clarity, refining its teaching accordingly."
            opacity={opacity3}
            y={y3}
          />
        </div>

        {/* Right Side: Premium Neural Core Visualization */}
        {/* Increased camera distance and reduced scale to ensure an "enlarged" yet unclipped view */}
        <div className="w-full lg:w-1/2 h-screen relative group flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none -mr-[20vw] lg:-mr-[10vw]"> {/* Allow slight bleed to the right */}
            <Canvas camera={{ position: [0, 0, 22], fov: 45 }} gl={{ alpha: true }} dpr={[1, 1.5]}>
              <ambientLight intensity={0.2} />
              <pointLight position={[10, 10, 10]} intensity={2} color="#f97316" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#60d0f0" />

              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <NeuralCore scrollProgress={smoothProgress} />
              </Float>
            </Canvas>
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
  );
};

export default ProblemSection;
