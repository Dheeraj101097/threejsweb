import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ToyModel(props) {
  const { scene } = useGLTF("/toy.glb");
  const ref = useRef();

  // Add slow rotation for "Premium Motion"
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      {/* INTERNAL SCALE FIX: 
         We scale it UP here so it looks normal in the scene.
         Adjust 'scale={20}' if it's still too small.
      */}
      <group ref={ref} scale={1} position={[0, -0.1, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
useGLTF.preload("/toy.glb");
