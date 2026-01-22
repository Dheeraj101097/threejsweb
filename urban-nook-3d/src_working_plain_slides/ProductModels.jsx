import React from "react";
import { useGLTF } from "@react-three/drei";

// --- REPLACE THESE WITH YOUR REAL GLTF MODELS ---

export const SunglassesModel = (props) => (
  <group {...props}>
    {/* Placeholder: Black Sunglasses Shape */}
    <mesh castShadow position={[-0.35, 0, 0]}>
      <circleGeometry args={[0.3, 32]} />
      <meshStandardMaterial color="#111" side={2} />
    </mesh>
    <mesh castShadow position={[0.35, 0, 0]}>
      <circleGeometry args={[0.3, 32]} />
      <meshStandardMaterial color="#111" side={2} />
    </mesh>
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[0.4, 0.05, 0.05]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  </group>
);

export const GlassesModel = (props) => (
  <group {...props}>
    {/* Placeholder: Clear Glasses Shape */}
    <mesh castShadow position={[-0.35, 0, 0]}>
      <ringGeometry args={[0.25, 0.3, 32]} />
      <meshStandardMaterial color="#333" />
    </mesh>
    <mesh position={[-0.35, 0, 0]}>
      <circleGeometry args={[0.25, 32]} />
      <meshPhysicalMaterial transmission={1} thickness={0.5} roughness={0} />
    </mesh>
    <mesh castShadow position={[0.35, 0, 0]}>
      <ringGeometry args={[0.25, 0.3, 32]} />
      <meshStandardMaterial color="#333" />
    </mesh>
    <mesh position={[0.35, 0, 0]}>
      <circleGeometry args={[0.25, 32]} />
      <meshPhysicalMaterial transmission={1} thickness={0.5} roughness={0} />
    </mesh>
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[0.4, 0.02, 0.02]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  </group>
);

export const LensModel = (props) => (
  <group {...props}>
    {/* Placeholder: Lens Shape */}
    <mesh castShadow rotation={[0, Math.PI / 2, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color="#444" roughness={0.2} />
    </mesh>
    <mesh position={[0.11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <circleGeometry args={[0.35, 32]} />
      <meshStandardMaterial color="#111" roughness={0} />
    </mesh>
  </group>
);
