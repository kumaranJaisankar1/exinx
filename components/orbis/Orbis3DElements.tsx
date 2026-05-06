"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, PerspectiveCamera, Environment, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function SchoolBus({ scrollYProgress }: { scrollYProgress: any }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const x = useTransform(scrollYProgress, [0.1, 0.4], [-15, 0]);
  const rotationY = useTransform(scrollYProgress, [0.1, 0.4], [0, Math.PI * 0.1]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = x.get();
      meshRef.current.rotation.y = rotationY.get() + (hovered ? Math.sin(state.clock.elapsedTime * 2) * 0.1 : 0);
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group 
      ref={meshRef} 
      scale={0.8}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Bus Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1.5, 1.8]} />
        <meshStandardMaterial color="#facc15" metalness={0.1} roughness={0.3} />
      </mesh>
      
      {/* Bus Top */}
      <mesh position={[-0.5, 1, 0]}>
        <boxGeometry args={[3, 0.8, 1.8]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Windows */}
      <mesh position={[0.5, 1, 0]}>
        <boxGeometry args={[0.1, 0.8, 1.6]} />
        <meshStandardMaterial color="#93c5fd" transparent opacity={0.6} />
      </mesh>

      {/* Wheels */}
      {[[-1.2, -0.7, 0.8], [1.2, -0.7, 0.8], [-1.2, -0.7, -0.8], [1.2, -0.7, -0.8]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#171717" />
        </mesh>
      ))}

      {/* Lights */}
      <mesh position={[2, 0, 0.6]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
      </mesh>
      <mesh position={[2, 0, -0.6]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function Chalkboard({ scrollYProgress }: { scrollYProgress: any }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const rotateY = useTransform(scrollYProgress, [0.4, 0.7], [Math.PI * 0.5, 0]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotateY.get() + (hovered ? Math.sin(state.clock.elapsedTime) * 0.05 : 0);
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[5, 0, -2]} 
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Board Frame */}
      <mesh>
        <boxGeometry args={[4.2, 2.7, 0.2]} />
        <meshStandardMaterial color="#451a03" />
      </mesh>
      
      {/* Board Surface */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[4, 2.5, 0.05]} />
        <meshStandardMaterial color="#064e3b" roughness={1} />
      </mesh>

      {/* Chalk Drawing (Text) */}
      <Text
        position={[0, 0.5, 0.17]}
        fontSize={0.3}
        color="white"
        maxWidth={3}
        textAlign="center"
      >
        ORBIS ACADEMY
      </Text>
      
      <Text
        position={[0, -0.2, 0.17]}
        fontSize={0.15}
        color="rgba(255,255,255,0.7)"
        maxWidth={3}
        textAlign="center"
      >
        E = mc²{"\n"}Digital Transformation
      </Text>

      {/* Chalk Piece */}
      <Float speed={5} rotationIntensity={2}>
        <mesh position={[1, -1.5, 0.5]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Float>
    </group>
  );
}

export default function Orbis3DElements() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <SchoolBus scrollYProgress={scrollYProgress} />
        <Chalkboard scrollYProgress={scrollYProgress} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
