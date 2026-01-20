import React from "react";
import { useGLTF } from "@react-three/drei";

export function BearModel(props) {
  // Replace with bear file. Using bmw as placeholder if you lack bear
  const { scene } = useGLTF("/bear.glb");
  return <primitive object={scene} {...props} />;
}
useGLTF.preload("/bear.glb");
