"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Sphere, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. The Intelligence Core (Abstract Energy)
function QuantumCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#a070f0"
        emissive="#60d0f0"
        emissiveIntensity={2}
        speed={2}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

// 2. Neural Network Cloud
function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { positions, colors, linePositions } = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorNova = new THREE.Color("#60d0f0");
    const colorAccent = new THREE.Color("#f0a030");
    
    for (let i = 0; i < count; i++) {
      // Random points in a sphere volume
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 3 + Math.random() * 0.5;
      
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      const mixed = colorNova.clone().lerp(colorAccent, Math.random());
      cols[i * 3] = mixed.r;
      cols[i * 3 + 1] = mixed.g;
      cols[i * 3 + 2] = mixed.b;
    }

    // Connect points that are close to each other
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const distSq = dx*dx + dy*dy + dz*dz;
        
        if (distSq < 1.5) { // Connection threshold
          lines.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          lines.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    return { 
      positions: pos, 
      colors: cols, 
      linePositions: new Float32Array(lines) 
    };
  }, []);

  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.1;
      linesRef.current.rotation.y = time * 0.1;
      
      // Dynamic scaling for "breathing" effect
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      pointsRef.current.scale.set(scale, scale, scale);
      linesRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#60d0f0" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

// 3. Floating Knowledge Modules
function KnowledgeModules() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(time + i) * 0.002;
        child.rotation.y += 0.01;
      });
    }
  });

  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => (
        <Icosahedron 
          key={i} 
          args={[0.2, 0]} 
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 5,
            Math.sin((i / 6) * Math.PI * 2) * 5,
            (Math.random() - 0.5) * 2
          ]}
        >
          <meshStandardMaterial color="#f0a030" emissive="#f0a030" emissiveIntensity={2} wireframe />
        </Icosahedron>
      ))}
    </group>
  );
}

// 4. Mouse Rig for Parallax
function Rig() {
  return useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
}

export default function NeuralOrb() {
  return (
    <div className="w-full h-full relative cursor-crosshair">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60d0f0" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a070f0" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <QuantumCore />
          <NeuralNetwork />
          <KnowledgeModules />
        </Float>
        
        <Sparkles count={100} scale={10} size={2} speed={0.2} color="#60d0f0" />
        <Rig />
      </Canvas>
    </div>
  );
}
