import React, { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CarModel } from "./CarModel";
import { BearModel } from "./BearModel";
import * as THREE from "three";

export function FeaturedSection({ isMobile }) {
  const scroll = useScroll();

  // Responsive Position
  // On Mobile: Center (0) | Desktop: Left (-3)
  const stagePos = isMobile ? [0, 0, 0] : [-3, 0, 0];

  return (
    <group position={stagePos}>
      {/* GREEN BOX (Static Pedestal) */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[4, 1.5, 4]} />
        <meshStandardMaterial color="#064e3b" roughness={0.8} metalness={0.2} />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(4, 1.5, 4)]} />
          <lineBasicMaterial color="#34d399" />
        </lineSegments>
      </mesh>

      {/* BMW (Visible during scroll 0.4 - 0.7) */}
      <ProductStage start={0.4} end={0.7}>
        <CarModel
          scale={isMobile ? 0.012 : 0.015}
          rotation={[0, 1, 0]}
          position={[0, -0.25, 0]}
        />
      </ProductStage>

      {/* BEAR (Visible during scroll 0.7 - 1.0) */}
      <ProductStage start={0.7} end={1.0}>
        <BearModel
          scale={isMobile ? 1.2 : 1.5}
          rotation={[0, -0.5, 0]}
          position={[0, -0.25, 0]}
        />
      </ProductStage>
    </group>
  );
}

// Logic to swap models (Fade In -> Wait -> Fade Out)
function ProductStage({ start, end, children }) {
  const scroll = useScroll();
  const group = useRef();

  useFrame(() => {
    // Curve: 0 -> 1 -> 0
    const r = scroll.curve(start, end - start);

    if (group.current) {
      group.current.scale.setScalar(r);
      group.current.rotation.y += 0.005;
      group.current.visible = r > 0.01;
    }
  });

  return <group ref={group}>{children}</group>;
}
