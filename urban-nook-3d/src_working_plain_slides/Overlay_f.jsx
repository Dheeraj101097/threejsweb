import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = ["WILD BEAR", "FRESH VASE", "MOON LAMP"];

export const Overlay_f = ({ activeIndex, direction }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 text-[#1a1a1a] overflow-hidden">
      {/* Navbar - Centered Container */}
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center pointer-events-auto opacity-70">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">
          Hidden Brand
        </span>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest">
          <a href="#">Shop</a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* --- TYPOGRAPHY ENGINE --- */}
      {/* Added 'w-full flex justify-center' to ensure centering */}
      <div className="absolute top-[20%] left-0 w-full flex justify-center z-0">
        <div className="relative w-full max-w-[90%] md:max-w-5xl flex justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <Title
              key={activeIndex}
              text={PRODUCTS[activeIndex]}
              direction={direction}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-end pointer-events-auto">
        <div className="flex items-center gap-3 opacity-60">
          <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-colors hover:bg-white hover:border-transparent">
            <span className="text-lg">↔</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Swipe / Drag
          </span>
        </div>

        <div className="text-xs font-mono opacity-40">
          0{activeIndex + 1} / 03
        </div>
      </div>
    </div>
  );
};

const Title = ({ text, direction }) => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const letterVars = {
    hidden: (dir) => ({ y: dir * 50, opacity: 0 }),
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      y: -dir * 50,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <motion.h1
      variants={containerVars}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={direction}
      // TEXT SIZE FIX:
      // Mobile: 15vw
      // Desktop: Clamped to text-9xl so it doesn't get crazy huge on wide screens
      className="flex text-[13vw] md:text-9xl xl:text-[10rem] font-serif leading-none tracking-tighter text-[#1a1a1a] mix-blend-multiply opacity-90 text-center whitespace-nowrap"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVars} custom={direction}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
