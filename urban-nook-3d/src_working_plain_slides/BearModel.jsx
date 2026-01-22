import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BearModel(props) {
  const { scene } = useGLTF("/bear.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={ref} scale={1.8} position={[0, -0.5, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
useGLTF.preload("/bear.glb");
