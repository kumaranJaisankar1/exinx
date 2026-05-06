"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3500;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorNova = new THREE.Color("#60d0f0");
    const colorAccent = new THREE.Color("#f97316");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const c = Math.random() > 0.8 ? colorAccent : colorNova;
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShape({ geometry, color, position, rotation }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
    mesh.current.position.y += Math.sin(t * 0.5) * 0.002;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.04} />
    </mesh>
  );
}

function Grid() {
  return (
    <gridHelper 
      args={[100, 50, "#60d0f0", "#1a1a2e"]} 
      position={[0, -20, 0]} 
      rotation={[0, 0, 0]}
    />
  );
}

export default function NovaBackgroundCanvas() {
  const shapes = useMemo(() => {
    const items = [];
    const geometries = [
      <icosahedronGeometry args={[3, 0]} />,
      <octahedronGeometry args={[2.5, 0]} />,
      <torusGeometry args={[2, 0.5, 16, 32]} />,
      <dodecahedronGeometry args={[2.2, 0]} />,
    ];
    const colors = ["#60d0f0", "#f97316"];

    for (let i = 0; i < 8; i++) {
      items.push({
        geometry: geometries[Math.floor(Math.random() * geometries.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        position: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30 - 10
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050508]">
      <Canvas camera={{ position: [0, 5, 25], fov: 60 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#050508", 10, 50]} />
        <NeuralParticles />
        <Grid />
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
