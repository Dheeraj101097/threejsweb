import React, { useRef } from "react";
import { useScroll, Text, Float, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Model } from "./LampModel"; // Use the fixed model file below
import * as THREE from "three";

export default function Scene({ isDarkMode }) {
  const scroll = useScroll();
  const lightRef = useRef();
  const textTitleRef = useRef();
  const textSubRef = useRef();

  // Colors
  const bgDark = new THREE.Color("#0a0a0a");
  const bgLight = new THREE.Color("#f4f4f0");

  useFrame((state, delta) => {
    const r = scroll.offset; // 0 to 1

    // --- 1. Background Transition ---
    if (state.scene.background) {
      state.scene.background.lerp(isDarkMode ? bgDark : bgLight, 0.05);
    }

    // --- 2. Lamp Movement (The "Reveal") ---
    // Starts at x:3 (Right), y:-5 (Hidden Bottom)
    // Ends at   x:1.5 (Slight Right), y:-1.5 (Visible Center)
    const targetY = THREE.MathUtils.lerp(-5, -1.5, r);
    const targetX = THREE.MathUtils.lerp(3, 1.5, r);

    // Smooth dampening for position (makes it feel heavy/premium)
    state.camera.position.x = THREE.MathUtils.lerp(0, 0.5, r); // Camera slight pan

    // --- 3. Text Reveal (From Left) ---
    if (textTitleRef.current) {
      // Slides from -6 (Left) to -2 (Center Left)
      textTitleRef.current.position.x = THREE.MathUtils.lerp(-8, -2.5, r);
      // Fade In
      textTitleRef.current.fillOpacity = THREE.MathUtils.lerp(0, 1, r * 2);
    }

    if (textSubRef.current) {
      textSubRef.current.position.x = THREE.MathUtils.lerp(-8, -2.5, r);
      textSubRef.current.fillOpacity = THREE.MathUtils.lerp(0, 0.6, r * 2);
    }

    // --- 4. Light Intensity ---
    if (lightRef.current) {
      // Dark mode: Light goes from 0 to 3
      // Light mode: Light stays subtle (0 to 1) so we don't wash out the white bg
      const maxIntensity = isDarkMode ? 3 : 1;
      lightRef.current.intensity = THREE.MathUtils.lerp(0, maxIntensity, r);
    }
  });

  return (
    <>
      {/* Dynamic Point Light (The Lamp's Bulb) */}
      <pointLight
        ref={lightRef}
        position={[1.5, 0.5, 0]} // Aligned roughly with where the lamp ends up
        distance={8}
        decay={2}
        color="#ffaa00"
      />

      {/* Ambient Fill */}
      <ambientLight intensity={isDarkMode ? 0.1 : 0.8} />
      <Environment preset={isDarkMode ? "night" : "studio"} />

      {/* --- The Text Layer --- */}
      <group position={[0, 0, -1]}>
        <Text
          ref={textTitleRef}
          fontSize={1.6}
          // font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
          color={isDarkMode ? "#ffffff" : "#1a1a1a"}
          anchorX="left"
          anchorY="middle"
          position={[-8, 0.5, 0]} // Start position
          fillOpacity={0}
        >
          Lumina Air.
        </Text>
        <Text
          ref={textSubRef}
          fontSize={0.4}
          // font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          color={isDarkMode ? "#ffffff" : "#1a1a1a"}
          anchorX="left"
          anchorY="top"
          position={[-8, -0.5, 0]}
          fillOpacity={0}
        >
          DESIGNED FOR THE SILENCE.
        </Text>
      </group>

      {/* --- The Lamp Model --- */}
      {/* We wrap it in a Float to give it life even when not scrolling */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Position and Scale are controlled here. 
            I used your scale of 10.5 from previous message.
            Position is controlled by the logic in useFrame above, 
            but we set initial here 
         */}
        <group position={[3, -5, 0]}>
          {/* We create a wrapper group to handle the scroll movement logic easily */}
          <MovingLampWrapper scale={10.5} isDarkMode={isDarkMode} />
        </group>
      </Float>
    </>
  );
}

// Helper component to hook into scroll for the specific object movement
function MovingLampWrapper({ scale, isDarkMode }) {
  const scroll = useScroll();
  const group = useRef();

  useFrame(() => {
    const r = scroll.offset;
    if (group.current) {
      // Move Up
      group.current.position.y = THREE.MathUtils.lerp(0, 2.7, r);
      // Move Left (Towards center)
      group.current.position.x = THREE.MathUtils.lerp(0, -0.8, r);
    }
  });

  return (
    <group ref={group}>
      <Model scale={scale} isDarkMode={isDarkMode} />
    </group>
  );
}
