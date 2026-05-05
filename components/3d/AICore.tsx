"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      {/* Outer Wireframe Sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.2} />
      </mesh>
      
      {/* Inner Distorted Core */}
      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#000000"
          emissive="#1d4ed8"
          emissiveIntensity={2}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
    </Float>
  );
}
