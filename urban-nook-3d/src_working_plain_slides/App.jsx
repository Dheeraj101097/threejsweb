// import React, { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { ScrollControls } from "@react-three/drei";
// import Scene from "./Scene";
// import Overlay from "./Overlay";
// import { useEffect, useRef } from "react";
// import { useDrag } from "@use-gesture/react";
// import { Experience } from "./Experience";

// const TOTAL_SLIDES = 3;
// const AUTO_PLAY_MS = 4000;
// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     if (!isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   //
//   // for featured sec
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const timerRef = useRef(null);

//   // --- NAVIGATION CONTROLS ---
//   const next = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
//     resetTimer();
//   };

//   const prev = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
//     resetTimer();
//   };

//   const resetTimer = () => {
//     if (timerRef.current) clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(next, AUTO_PLAY_MS);
//   };

//   // Start Auto-Play
//   useEffect(() => {
//     resetTimer();
//     return () => clearTimeout(timerRef.current);
//   }, []);

//   // --- GESTURE CONTROL (Swipe) ---
//   const bind = useDrag(({ swipe: [swipeX] }) => {
//     if (swipeX === -1) next();
//     if (swipeX === 1) prev();
//   });

//   return (
//     <>
//       {/* featured prods */}
//       <div
//         {...bind()}
//         className="relative w-full h-screen bg-[#f0f0f0] touch-none select-none overflow-hidden"
//       >
//         {/* 3D Scene */}
//         <Canvas shadows camera={{ position: [0, 0, 6], fov: 35 }}>
//           <Experience activeIndex={index} direction={direction} />
//         </Canvas>

//         {/* --- UI OVERLAY --- */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-6 md:p-12 text-[#222]">
//           {/* Navbar */}
//           <nav className="flex justify-between items-center w-full text-xs font-bold uppercase tracking-widest opacity-60">
//             <span>Hidden Brand</span>
//             <div className="flex gap-4">
//               <a href="#">Shop</a>
//               <a href="#">Login</a>
//             </div>
//           </nav>

//           {/* Dynamic Big Text (Behind the product) */}
//           <div className="absolute top-1/3 left-0 w-full text-center pointer-events-none mix-blend-overlay opacity-20">
//             <h1 className="text-[18vw] font-serif leading-none tracking-tighter transition-all duration-500">
//               {index === 0 && "SHADES"}
//               {index === 1 && "OPTICS"}
//               {index === 2 && "LENSES"}
//             </h1>
//           </div>

//           {/* Footer Controls */}
//           <div className="flex justify-between items-end pointer-events-auto">
//             <div className="flex items-center gap-4">
//               <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center animate-bounce">
//                 ↓
//               </div>
//               <span className="text-xs font-bold uppercase tracking-widest opacity-50">
//                 Scroll to explore
//               </span>
//             </div>

//             {/* Slide Indicators */}
//             <div className="flex gap-2">
//               {[0, 1, 2].map((i) => (
//                 <div
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > index ? 1 : -1);
//                     setIndex(i);
//                     resetTimer();
//                   }}
//                   className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === index ? "bg-black w-6" : "bg-black/20"}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // <div
// //   className={`relative w-full h-screen transition-colors duration-1000 ease-in-out ${
// //     isDarkMode ? "bg-nook-bg-dark" : "bg-nook-bg-light"
// //   }`}
// // >
// //   <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
// //     {/* Default background color to prevent crash, animates in Scene.jsx */}
// //     <color
// //       attach="background"
// //       args={[isDarkMode ? "#0a0a0a" : "#f4f4f0"]}
// //     />

// //     <ScrollControls pages={4} damping={0.2}>
// //       <Suspense fallback={null}>
// //         <Scene isDarkMode={isDarkMode} />
// //       </Suspense>
// //     </ScrollControls>
// //   </Canvas>

// //   <Overlay isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// // </div>

// abv double comment is moon
import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { Experience } from "./Experience";
import { Overlay_f } from "./Overlay_f";

const TOTAL_SLIDES = 3;
const AUTO_PLAY_MS = 6000;
export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    resetTimer();
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
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

  return (
    <div
      {...bind()}
      className="relative w-full h-screen bg-[#e6e6e6] touch-none select-none overflow-hidden font-sans"
    >
      {/* CAMERA ADJUSTMENT:
         position={[0, -1, 9]}
         y: -1 -> Lowers camera to see more 'front' of the box
         z: 9  -> Keeps a good distance so the box doesn't distort
      */}
      <Canvas shadows camera={{ position: [0, -1, 9], fov: 35 }}>
        {/* Background color matches the box material for seamless look */}
        {/* <color attach="background" args={["#e6e6e6"]} /> */}
        {/* Fog to blend the floor into the background */}
        {/* <fog attach="fog" args={["#e6e6e6", 5, 20]} /> */}
        <color attach="background" args={["#e0e0e0"]} />
        <fog attach="fog" args={["#e0e0e0", 10, 25]} />
        <Experience activeIndex={index} direction={direction} />
      </Canvas>
      {/* FOV 30 = Telephoto lens look (Premium) try below once and check */}
      {/* <Canvas shadows camera={{ position: [0, -0.5, 10], fov: 30 }}>
        <color attach="background" args={["#e2e2e2"]} />
        <fog attach="fog" args={["#e2e2e2", 8, 20]} />
        <Experience activeIndex={index} direction={direction} />
      </Canvas>*/}

      <Overlay_f activeIndex={index} direction={direction} />
    </div>
  );
}
