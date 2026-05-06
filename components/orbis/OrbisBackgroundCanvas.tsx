"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Ring } from "@react-three/drei";
import * as THREE from "three";

function OrbitalRings() {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <Ring key={i} args={[10 + i * 5, 10.1 + i * 5, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial 
            color={i % 2 === 0 ? "#f97316" : "#3b82f6"} 
            transparent 
            opacity={0.05 - i * 0.008} 
          />
        </Ring>
      ))}
    </group>
  );
}

function PrismField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const prismColors = [
      new THREE.Color("#f97316"), // Orange
      new THREE.Color("#3b82f6"), // Blue
      new THREE.Color("#ec4899"), // Rose
      new THREE.Color("#06b6d4"), // Cyan
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const c = prismColors[Math.floor(Math.random() * prismColors.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function OrbisBackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050508]">
      <Canvas camera={{ position: [0, 10, 50], fov: 60 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#050508", 30, 90]} />
        <PrismField />
        <OrbitalRings />
        <ambientLight intensity={0.5} />
      </Canvas>
      {/* Prism Light Leak Overlays to match Hero Video */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
    </div>
  );
}
