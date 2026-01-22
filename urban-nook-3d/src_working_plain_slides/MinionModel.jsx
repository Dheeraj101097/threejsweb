import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function MinionModel(props) {
  const { scene } = useGLTF("/minion.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      {/* Adjusted scale/position. Minions are usually small, so we scale UP */}
      <group ref={ref} scale={0.5} position={[0, -0.5, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
useGLTF.preload("/minion.glb");
