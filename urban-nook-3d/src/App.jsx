import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { PRODUCTS, THEME } from "./data";
import { Experience } from "./Experience";
import { Overlay } from "./Overlay";

const AUTO_PLAY_MS = 6000;

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PRODUCTS.length);
    resetTimer();
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, AUTO_PLAY_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timerRef.current);
  }, []);

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX === -1) next();
    if (swipeX === 1) prev();
  });

  // --- GRADIENT LOGIC (Requirement #1 & #3) ---
  const bgStyle = {
    background: isDarkMode
      ? `radial-gradient(circle at 50% -20%, ${THEME.colors.primaryDark}, ${THEME.colors.secondaryDark})`
      : `linear-gradient(to bottom, ${THEME.colors.primaryLight}, ${THEME.colors.secondaryLight})`,
  };

  return (
    <div
      {...bind()}
      className="relative w-full h-screen touch-none select-none overflow-hidden transition-all duration-1000 ease-in-out font-sans"
      style={bgStyle}
    >
      {/* 3D LAYER - Middle */}
      <div className="absolute inset-0 z-10">
        <Canvas
          shadows
          camera={{ position: [0, -0.5, 9], fov: 35 }}
          gl={{ alpha: true }}
        >
          <Experience
            products={PRODUCTS}
            activeIndex={index}
            direction={direction}
            isDarkMode={isDarkMode}
            theme={THEME}
          />
        </Canvas>
      </div>

      {/* UI LAYER - Top (Passes Data Down) */}
      <Overlay
        product={PRODUCTS[index]}
        direction={direction}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        theme={THEME}
        current={index + 1}
        total={PRODUCTS.length}
      />
    </div>
  );
}
