import React from "react";
import { useGLTF } from "@react-three/drei";

export function CarModel(props) {
  const { scene } = useGLTF("/bmw.glb"); // Make sure bmw.glb is in public/
  return <primitive object={scene} {...props} />;
}
useGLTF.preload("/bmw.glb");
