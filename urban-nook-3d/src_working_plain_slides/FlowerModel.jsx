import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function FlowerModel(props) {
  const { scene } = useGLTF("/flower.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.1;
  });

  return (
    <group {...props} dispose={null}>
      {/* Vases can be huge or tiny. Adjust scale= here if needed */}
      <group ref={ref} scale={3} position={[0, -0.8, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
useGLTF.preload("/flower.glb");
