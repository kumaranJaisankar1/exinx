"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

function CoreNodes({ scrollYProgress }: { scrollYProgress: any }) {
  const pointsRef = useRef<THREE.Points>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.8, 2.5, 1.5, 1]);
  const distortion = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.4]);
  const emissiveIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.6, 0.9]);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = 2.5 + Math.random() * 3;
      pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = distance * Math.cos(theta);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = rotationY.get() + state.clock.elapsedTime * 0.15;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    }
    if (meshRef.current) {
      meshRef.current.scale.setScalar(scale.get());
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF0000"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          opacity={isDark ? 0.55 : 0.4}
        />
      </Points>

      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#FF0000"
            speed={2.5}
            distort={distortion.get()}
            radius={1}
            emissive="#FF0000"
            emissiveIntensity={isDark ? emissiveIntensity.get() : 0.2}
            transparent
            opacity={isDark ? 0.15 : 0.08}
          />
        </Sphere>
      </Float>

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={3} color="#FF0000" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#cc0000" />
    </group>
  );
}

export default function IyotaPrepDataCore() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <CoreNodes scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
