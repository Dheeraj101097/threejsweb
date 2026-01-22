import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function WarriorModel(props) {
  const { scene } = useGLTF("/warrior.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.1;
  });

  return (
    <group {...props} dispose={null}>
      {/* NOTE: Sketchfab models vary wildly in size.
         Start with scale={1}. If invisible, try scale={0.01} or scale={100}.
         I've set a safe default of 1.
      */}
      <group ref={ref} scale={8} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
useGLTF.preload("/warrior.glb");
