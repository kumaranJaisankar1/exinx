"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  MeshDistortMaterial, 
  Sphere, 
  Float, 
  PerspectiveCamera, 
  OrbitControls,
  Points,
  PointMaterial,
  Dodecahedron
} from "@react-three/drei";
import * as THREE from "three";

// 1. Nova: Neural Sphere (Morphing)
function NovaModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#60d0f0"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#2080a0"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <pointLight position={[2, 2, 2]} intensity={50} color="#60d0f0" />
      <pointLight position={[-2, -2, -2]} intensity={20} color="#3090c0" />
    </Float>
  );
}

// 2. Orbis: Knowledge Network (Point Cloud / Grid)
function OrbisModel() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.2 + Math.random() * 0.1;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Points ref={pointsRef} positions={particles} stride={3}>
        <PointMaterial
          transparent
          color="#a070f0"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Subtle core sphere */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial 
          color="#a070f0" 
          transparent 
          opacity={0.1} 
          wireframe 
        />
      </Sphere>
      <pointLight position={[0, 0, 0]} intensity={30} color="#a070f0" />
    </Float>
  );
}

// 3. IyotaPrep: Precision Crystal (Geometric)
function IyotaPrepModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
      <Dodecahedron ref={meshRef} args={[1, 0]}>
        <meshPhysicalMaterial
          color="#f07050"
          emissive="#c04030"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
          transmission={0.5}
          thickness={0.5}
          clearcoat={1}
        />
      </Dodecahedron>
      <pointLight position={[2, 2, 5]} intensity={60} color="#f07050" />
      <pointLight position={[-3, -3, -3]} intensity={30} color="#ffaa88" />
    </Float>
  );
}

export function Product3DCanvas({ id }: { id: string }) {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={100} />
        
        {id === "nova" && <NovaModel />}
        {id === "orbis" && <OrbisModel />}
        {id === "iyotaprep" && <IyotaPrepModel />}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
