import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene";
import Overlay from "./Overlay";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`relative w-full h-screen transition-colors duration-1000 ease-in-out ${
        isDarkMode ? "bg-nook-bg-dark" : "bg-nook-bg-light"
      }`}
    >
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
        {/* Default background color to prevent crash, animates in Scene.jsx */}
        <color
          attach="background"
          args={[isDarkMode ? "#0a0a0a" : "#f4f4f0"]}
        />

        <ScrollControls pages={3} damping={0.2}>
          <Suspense fallback={null}>
            <Scene isDarkMode={isDarkMode} />
          </Suspense>
        </ScrollControls>
      </Canvas>

      <Overlay isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
