// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const Overlay = ({
//   product,
//   direction,
//   isDarkMode,
//   toggleTheme,
//   theme,
//   current,
//   total,
// }) => {
//   const textColor = isDarkMode ? theme.colors.textDark : theme.colors.textLight;

//   return (
//     <div
//       className={`absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between pointer-events-none ${textColor}`}
//     >
//       {/* 1. NAVBAR */}
//       <div className="p-6 md:p-12 w-full flex justify-between items-center pointer-events-auto">
//         <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
//           Hidden Brand
//         </span>
//         <div className="flex gap-4 items-center">
//           <button
//             onClick={toggleTheme}
//             className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
//           >
//             {isDarkMode ? "Light" : "Dark"}
//           </button>
//           <a
//             href="#"
//             className="text-[10px] font-bold uppercase tracking-widest opacity-80"
//           >
//             Login
//           </a>
//         </div>
//       </div>

//       {/* 2. BIG BACKGROUND TITLE (Absolute Center - Behind Model) */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[-1] overflow-hidden">
//         <div className="relative w-full text-center -mt-20 md:mt-0">
//           <AnimatePresence mode="wait" custom={direction}>
//             <BigTitle
//               key={product.id}
//               text={product.name}
//               direction={direction}
//               color={textColor}
//             />
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* 3. PRODUCT DETAILS (Glassmorphism Card) */}
//       {/* Mobile: Bottom Center | Desktop: Right Side */}
//       <div className="flex-1 flex flex-col justify-end md:justify-center items-center md:items-end px-6 md:px-12 pb-20 md:pb-0">
//         <div className="pointer-events-auto max-w-[300px] md:max-w-md w-full">
//           <AnimatePresence mode="wait">
//             <ProductCard
//               product={product}
//               theme={theme}
//               isDarkMode={isDarkMode}
//             />
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* 4. FOOTER */}
//       <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end opacity-60">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
//             ↓
//           </div>
//           <span className="text-[10px] font-bold uppercase tracking-widest">
//             Scroll / Drag
//           </span>
//         </div>
//         <div className="text-xs font-mono">
//           0{current} / 0{total}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- COMPONENTS ---

// const BigTitle = ({ text, direction, color }) => {
//   const variants = {
//     enter: (dir) => ({ x: dir * 100, opacity: 0 }),
//     center: { x: 0, opacity: 0.15 }, // Low opacity so it sits behind
//     exit: (dir) => ({ x: -dir * 100, opacity: 0 }),
//   };
//   return (
//     <motion.h1
//       custom={direction}
//       variants={variants}
//       initial="enter"
//       animate="center"
//       exit="exit"
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//       className="text-[18vw] md:text-[13vw] font-serif leading-none tracking-tighter whitespace-nowrap"
//       style={{ color: color }}
//     >
//       {text}
//     </motion.h1>
//   );
// };

// const ProductCard = ({ product, theme, isDarkMode }) => {
//   return (
//     <motion.div
//       key={product.id}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//       // GLASSMORPHISM STYLE (Requirement #7 & #8)
//       className="p-6 rounded-2xl text-center md:text-right backdrop-blur-md border border-white/10 shadow-2xl"
//       style={{
//         background: isDarkMode
//           ? "rgba(47, 68, 61, 0.6)"
//           : "rgba(255, 255, 255, 0.4)",
//         boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
//       }}
//     >
//       {/* Caption */}
//       <h3
//         className="text-xs font-bold tracking-[0.2em] mb-2 uppercase"
//         style={{ color: theme.colors.accent }}
//       >
//         {product.caption}
//       </h3>

//       {/* Description */}
//       <p className="text-xs leading-relaxed opacity-80 mb-4 font-sans">
//         {product.description}
//       </p>

//       {/* Gradient Line (Requirement #4) */}
//       <div
//         className="h-[1px] w-full mb-4"
//         style={{
//           background: `linear-gradient(to right, transparent, ${theme.colors.accent}, transparent)`,
//         }}
//       ></div>

//       {/* Price & Button */}
//       <div className="flex justify-between md:justify-end items-center gap-4">
//         <span className="text-2xl font-serif">{product.price}</span>
//         <button
//           className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all hover:scale-105"
//           style={{
//             background: theme.colors.accent,
//             color: theme.colors.primaryDark,
//           }}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

//
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const Overlay = ({
//   product,
//   direction,
//   isDarkMode,
//   toggleTheme,
//   theme,
//   current,
//   total,
// }) => {
//   const textColor = isDarkMode ? theme.colors.textDark : theme.colors.textLight;

//   return (
//     <div
//       className={`absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between pointer-events-none ${textColor}`}
//     >
//       {/* 1. NAVBAR (Top) */}
//       <div className="p-6 md:p-12 w-full flex justify-between items-center pointer-events-auto">
//         <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
//           Hidden Brand
//         </span>
//         <div className="flex gap-4 items-center">
//           <button
//             onClick={toggleTheme}
//             className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
//           >
//             {isDarkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//           <a
//             href="#"
//             className="text-[10px] font-bold uppercase tracking-widest opacity-80"
//           >
//             Login
//           </a>
//         </div>
//       </div>

//       {/* 2. PRODUCT CARD (Strictly Below Navbar, Top Right) */}
//       {/* - absolute top-24: Pushes it down below the navbar (approx 96px from top)
//           - right-0: Aligns to right side
//           - z-30: Ensures it is above everything else
//       */}
//       <div className="absolute top-24 right-0 w-full flex justify-center md:justify-end px-6 md:px-12 z-30">
//         <div className="pointer-events-auto w-full max-w-[300px] md:max-w-xs">
//           <AnimatePresence mode="wait">
//             <ProductCard
//               product={product}
//               theme={theme}
//               isDarkMode={isDarkMode}
//             />
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* 2. BIG TITLE (Behind Product, Upper Middle) */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[-1] overflow-hidden">
//         {/* Shifted UP (-mt-32) to clear the box area */}
//         <div className="relative w-full text-center -mt-32 md:-mt-40">
//           <AnimatePresence mode="wait" custom={direction}>
//             <BigTitle
//               key={product.id}
//               text={product.name}
//               direction={direction}
//               color={textColor}
//             />
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* 3. PRODUCT CARD (Bottom Area, overlapping box)
//       <div className="flex-1 flex flex-col justify-end items-center md:items-end px-6 md:px-12 pb-24 md:pb-12">
//         <div className="pointer-events-auto w-full md:max-w-xs">
//           <AnimatePresence mode="wait">
//             <ProductCard
//               product={product}
//               theme={theme}
//               isDarkMode={isDarkMode}
//             />
//           </AnimatePresence>
//         </div>
//       </div> */}

//       {/* 4. FOOTER (Very Bottom) */}
//       <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end opacity-50">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
//             ↓
//           </div>
//           <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">
//             Drag to explore
//           </span>
//         </div>
//         <div className="text-xs font-mono">
//           0{current} / 0{total}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- SUB-COMPONENTS ---

// const BigTitle = ({ text, direction, color }) => {
//   const variants = {
//     enter: (dir) => ({ x: dir * 100, opacity: 0 }),
//     center: { x: 0, opacity: 0.1 }, // Very subtle
//     exit: (dir) => ({ x: -dir * 100, opacity: 0 }),
//   };
//   return (
//     <motion.h1
//       custom={direction}
//       variants={variants}
//       initial="enter"
//       animate="center"
//       exit="exit"
//       transition={{ duration: 0.8 }}
//       className="text-[18vw] md:text-[12vw] font-serif leading-none tracking-tighter whitespace-nowrap"
//       style={{ color: color }}
//     >
//       {text}
//     </motion.h1>
//   );
// };

// const ProductCard = ({ product, theme, isDarkMode }) => {
//   return (
//     <motion.div
//       key={product.id}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       // GLASSMORPHISM CARD
//       className="p-5 rounded-xl backdrop-blur-md shadow-lg border border-white/10 text-center md:text-right"
//       style={{
//         background: isDarkMode
//           ? // ? "rgba(20, 30, 25,0.4)"
//             "rgba(255, 255, 255, 0.2)"
//           : "rgba(255, 255, 255, 0.3)",
//       }}
//     >
//       <h3
//         className="text-[10px] font-bold tracking-[0.2em] mb-1 uppercase"
//         style={{ color: theme.colors.accent }}
//       >
//         {product.caption}
//       </h3>
//       <p className="text-[10px] leading-relaxed opacity-80 mb-3 font-sans">
//         {product.description}
//       </p>
//       <div className="flex justify-center md:justify-end items-center gap-3">
//         <span className="text-xl font-serif">{product.price}</span>
//         <button
//           className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all hover:scale-105"
//           style={{
//             background: theme.colors.accent,
//             color: theme.colors.primaryDark,
//           }}
//         >
//           Buy
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// ABV IS NICE BUT PLACEMENT COLOR PLBM

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Overlay = ({
  product,
  direction,
  isDarkMode,
  toggleTheme,
  theme,
  current,
  total,
}) => {
  const textColor = isDarkMode ? theme.colors.textDark : theme.colors.textLight;

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between pointer-events-none ${textColor}`}
    >
      {/* 1. NAVBAR (Top) */}
      <div className="p-6 md:p-12 w-full flex justify-between items-center pointer-events-auto z-30">
        <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          Hidden Brand
        </span>
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <a
            href="#"
            className="text-[10px] font-bold uppercase tracking-widest opacity-80"
          >
            Login
          </a>
        </div>
      </div>
      {/* <div className="absolute top-[80px] right-0 w-full flex justify-end px-6 md:px-12 z-30 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[280px] md:max-w-xs">
          <AnimatePresence mode="wait">
            <ProductCard
              product={product}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          </AnimatePresence>
        </div> 
      </div>*/}

      {/* 2. PRODUCT CARD (EXACT PLACEMENT: Below Navbar, Right Side) */}
      <div className="absolute top-24 right-0 w-full flex justify-end px-6 md:px-12 z-30 pointer-events-none">
        {/* pointer-events-auto enables clicking buttons inside this box */}
        <div className="pointer-events-auto w-full max-w-fit md:max-w-xs">
          <AnimatePresence mode="wait">
            <ProductCard
              product={product}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* 3. BIG BACKGROUND TITLE (Center Screen) */}
      <div className="absolute -top-[6rem] left-0 w-full h-full flex items-center justify-center z-[-1] overflow-hidden">
        <div className="relative w-full text-center mt-10 md:mt-0">
          <AnimatePresence mode="wait" custom={direction}>
            <BigTitle
              key={product.id}
              text={product.name}
              direction={direction}
              color={textColor}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* 4. FOOTER (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end opacity-60 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
            ↓
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">
            Drag to explore
          </span>
        </div>
        <div className="text-xs font-mono">
          0{current} / 0{total}
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const BigTitle = ({ text, direction, color }) => {
  const variants = {
    enter: (dir) => ({ x: dir * 100, opacity: 0 }),
    center: { x: 0, opacity: 0.15 },
    exit: (dir) => ({ x: -dir * 100, opacity: 0 }),
  };

  return (
    <motion.h1
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      // MATCHED ANIMATION: Duration 1.0, Same Bezier Curve
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="text-[16vw] md:text-[13vw] font-serif leading-none tracking-tighter whitespace-nowrap"
      style={{ color: color }}
    >
      {text}
    </motion.h1>
  );
};

const ProductCard = ({ product, theme, isDarkMode }) => {
  // Add this line at the top of your ProductCard component
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-5 rounded-xl backdrop-blur-md shadow-lg border border-white/10"
      style={{
        background: isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.3)",
      }}
    >
      <h3
        className=" text-lg font-semibold  tracking-[0.2em] mb-1 uppercase"
        style={{ color: theme.colors.accent }}
      >
        {product.caption}
      </h3>
      <p
        className="text-md leading-normal  opacity-80 my-3 font-thin"
        style={{
          color: isDarkMode ? "#e5ebeb" : "#101010",
        }}
      >
        {product.description}
      </p>

      {/* Gradient Line */}
      <div
        className="h-[1px] w-full mb-3 ml-auto"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.colors.accent}, transparent)`,
        }}
      ></div>

      <div className="flex justify-between items-center ">
        <span className="text-xl font-serif">{product.price}</span>
        {/* <button
          className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm transition-all hover:scale-105"
          style={{
            background: theme.colors.accent,
            color: theme.colors.primaryDark,
          }}
        >
          Buy
        </button> */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-4 py-2 text-sm font-bold uppercase border rounded-md transition-all duration-500 ease-out"
          style={{
            borderColor: theme.colors.accent,
            // Hollow by default, fills on hover
            background: isHovered ? theme.colors.accent : "transparent",
            // Text matches accent by default, turns dark on hover for contrast
            color: isHovered ? theme.colors.primaryDark : theme.colors.accent,
          }}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
