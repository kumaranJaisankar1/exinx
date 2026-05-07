"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { siteConfig } from "@/lib/config";

function Particles({ mouse, theme }: { mouse: React.MutableRefObject<[number, number]>, theme?: string }) {
  const ref = useRef<THREE.Points>(null!);
  const count = 2000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const palette = [
      new THREE.Color(siteConfig.colors.accent),
      new THREE.Color(siteConfig.colors.nova),
      new THREE.Color(siteConfig.colors.orbis),
      new THREE.Color(siteConfig.colors.iyotaPrep),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const c = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02 + mouse.current[0] * 0.05;
    ref.current.rotation.x = mouse.current[1] * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'light' ? 0.2 : 0.6}
        blending={theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShape({ geometry, color, position, rotation }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  const rotSpeed = useMemo(() => ({
    x: (Math.random() - 0.5) * 0.005,
    y: (Math.random() - 0.5) * 0.005
  }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x += rotSpeed.x;
    mesh.current.rotation.y += rotSpeed.y;
    mesh.current.position.y += Math.sin(t * 0.5 + Math.random()) * 0.002;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.05} />
    </mesh>
  );
}

function Scene({ mouse, theme }: { mouse: React.MutableRefObject<[number, number]>, theme?: string }) {
  const { camera } = useThree();
  const shapes = useMemo(() => {
    const items = [];
    const geometries = [
      <icosahedronGeometry args={[3, 0]} />,
      <octahedronGeometry args={[2.5, 0]} />,
      <tetrahedronGeometry args={[2, 0]} />,
      <torusGeometry args={[2, 0.5, 8, 16]} />,
      <dodecahedronGeometry args={[2.2, 0]} />,
    ];
    const colors = [
      siteConfig.colors.accent,
      siteConfig.colors.nova,
      siteConfig.colors.orbis,
      siteConfig.colors.iyotaPrep,
    ];

    for (let i = 0; i < 10; i++) {
      items.push({
        geometry: geometries[Math.floor(Math.random() * geometries.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        position: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 40 - 20
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
      });
    }
    return items;
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current[0] * 3 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current[1] * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Particles mouse={mouse} theme={theme} />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </>
  );
}

export default function BackgroundCanvas() {
  const mouse = useRef<[number, number]>([0, 0]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }} dpr={[1, 2]}>
        <Scene mouse={mouse} theme={theme} />
      </Canvas>
    </div>
  );
}
