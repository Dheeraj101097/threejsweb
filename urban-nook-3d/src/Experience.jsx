// import React, { useRef } from "react";
// import { useThree, useFrame } from "@react-three/fiber";
// import {
//   Environment,
//   ContactShadows,
//   Float,
//   RoundedBox,
// } from "@react-three/drei";
// import { motion } from "framer-motion-3d";

// export const Experience = ({
//   products,
//   activeIndex,
//   direction,
//   isDarkMode,
//   theme,
// }) => {
//   const { viewport } = useThree();
//   const pedestalRef = useRef();

//   const isMobile = viewport.width < 5;
//   const boxWidth = isMobile ? 3.2 : 5;

//   // Adjusted positioning to fit the new UI layout
//   const bottomEdge = -viewport.height / 2;
//   const targetTopY = bottomEdge + viewport.height * 0.2; // Sits at bottom 20%
//   const boxHeight = 3.5;
//   const pedestalY = targetTopY - boxHeight / 2;
//   const productY = targetTopY;

//   useFrame((state, delta) => {
//     if (pedestalRef.current) pedestalRef.current.rotation.y += delta * 0.05;
//   });

//   return (
//     <>
//       <ambientLight intensity={isDarkMode ? 0.3 : 0.6} />
//       <spotLight
//         position={[5, 10, 5]}
//         intensity={2}
//         angle={0.4}
//         penumbra={0.5}
//         castShadow
//         color={isDarkMode ? theme.colors.accent : "#fff"}
//       />
//       <Environment preset={isDarkMode ? "forest" : "city"} />

//       {/* THE BOX - Matches Green Theme */}
//       <group position={[0, pedestalY, 0]}>
//         <RoundedBox
//           ref={pedestalRef}
//           args={[boxWidth, boxHeight, 3.5]}
//           radius={0.05}
//           smoothness={4}
//           receiveShadow
//           rotation-y={-0.6}
//         >
//           <meshPhysicalMaterial
//             // Use Dark Green in Dark Mode, White/Green tint in Light Mode
//             color={
//               isDarkMode
//                 ? theme.colors.secondaryDark
//                 : theme.colors.primaryLight
//             }
//             roughness={0.2}
//             metalness={0.1}
//             clearcoat={0.5}
//           />
//         </RoundedBox>

//         <ContactShadows
//           position={[0, boxHeight / 2 + 0.01, 0]}
//           opacity={0.5}
//           scale={boxWidth}
//           blur={2}
//           far={1}
//           color="#000000"
//         />
//       </group>

//       {products.map((product, index) => (
//         <ProductItem
//           key={product.id}
//           item={product}
//           isActive={index === activeIndex}
//           direction={direction}
//           yPos={productY + (product.heightOffset || 0)}
//           isMobile={isMobile}
//         />
//       ))}
//     </>
//   );
// };

// const ProductItem = ({ item, isActive, direction, yPos, isMobile }) => {
//   const Model = item.Component;
//   const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };
//   const safeRotation = item.rotation || [0, 0, 0];
//   const finalScale = isMobile ? item.scale * 0.9 : item.scale;

//   const variants = {
//     enter: {
//       x: 0,
//       scale: finalScale,
//       rotateY: safeRotation[1],
//       opacity: 1,
//       transition,
//     },
//     exit: (dir) => ({
//       x: -dir * 12,
//       scale: finalScale * 0.8,
//       rotateY: safeRotation[1] - dir * 0.5,
//       opacity: 0,
//       transition: { duration: 0.8 },
//     }),
//     initial: (dir) => ({
//       x: dir * 12,
//       scale: finalScale * 0.8,
//       rotateY: safeRotation[1] + dir * 0.5,
//       opacity: 0,
//     }),
//   };

//   return (
//     <motion.group
//       position-y={yPos}
//       animate={isActive ? "enter" : "exit"}
//       initial="initial"
//       custom={direction}
//       variants={variants}
//     >
//       <Float
//         speed={2}
//         rotationIntensity={0.1}
//         floatIntensity={0.2}
//         floatingRange={[-0.05, 0.05]}
//       >
//         <Model />
//       </Float>
//     </motion.group>
//   );
// };

// //
// import React, { useRef } from "react";
// import { useThree, useFrame } from "@react-three/fiber";
// import {
//   Environment,
//   ContactShadows,
//   Float,
//   RoundedBox,
// } from "@react-three/drei";
// import { motion } from "framer-motion-3d";

// export const Experience = ({
//   products,
//   activeIndex,
//   direction,
//   isDarkMode,
//   theme,
// }) => {
//   const { viewport } = useThree();
//   const pedestalRef = useRef();

//   // --- STRICT LAYOUT FIX ---
//   // 1. Box dimensions
//   const isMobile = viewport.width < 5;
//   const boxWidth = isMobile ? 2.5 : 5;
//   const boxHeight = isMobile ? 5 : 4; // Tall box

//   // 2. Exact Bottom Alignment
//   // We place the center of the box such that its top is roughly at the bottom 1/3 of screen
//   const boxTopY = -1.2; // Visual "Floor" level for products // change thiis for view angleless the moves top
//   const boxCenterY = boxTopY - boxHeight / 2;

//   // 3. Product Alignment
//   // Products sit exactly at boxTopY
//   const productY = boxTopY + 0.2;

//   useFrame((state, delta) => {
//     if (pedestalRef.current) pedestalRef.current.rotation.y += delta * 0.05;
//   });

//   return (
//     <>
//       <ambientLight intensity={isDarkMode ? 0.4 : 0.8} />
//       <spotLight
//         position={[0, 10, 5]} // Top-down light
//         intensity={isDarkMode ? 2 : 1.5}
//         angle={0.5}
//         penumbra={1}
//         castShadow
//         color={isDarkMode ? theme.colors.accent : "#ffffff"}
//       />
//       <Environment preset={isDarkMode ? "city" : "studio"} />

//       {/* --- THE PODIUM --- */}
//       <group position={[0, boxCenterY, 0]}>
//         <RoundedBox
//           ref={pedestalRef}
//           args={[boxWidth, boxHeight, 4]} // [Width, Height, Depth]
//           radius={0.05}
//           smoothness={4}
//           receiveShadow
//           rotation-y={-0.6}
//         >
//           <meshPhysicalMaterial
//             color={isDarkMode ? theme.colors.secondaryDark : "#f0f0f0"}
//             roughness={0.2}
//             metalness={0.1}
//             clearcoat={0.5}
//             clearcoatRoughness={0.4}
//           />
//         </RoundedBox>

//         {/* Shadow on top of the box */}
//         <ContactShadows
//           position={[0, boxHeight / 2 + 0.01, 0]}
//           opacity={0.5}
//           scale={boxWidth}
//           blur={2.5}
//           far={1}
//           color="#000000"
//         />
//       </group>

//       {/* --- RENDER PRODUCTS --- */}
//       {products.map((product, index) => (
//         <ProductItem
//           key={product.id}
//           item={product}
//           isActive={index === activeIndex}
//           direction={direction}
//           yPos={productY + (product.heightOffset || 0)}
//           isMobile={isMobile}
//         />
//       ))}
//     </>
//   );
// };

// // const ProductItem = ({ item, isActive, direction, yPos, isMobile }) => {
// //   const Model = item.Component;
// //   const transition = { duration: 1.0, ease: [0.16, 1, 0.3, 1] };
// //   const safeRotation = item.rotation || [0, 0, 0];
// //   const finalScale = isMobile ? item.scale * 0.85 : item.scale;

// //   const variants = {
// //     enter: {
// //       x: 0,
// //       scale: finalScale,
// //       rotateY: safeRotation[1],
// //       opacity: 1,
// //       transition,
// //     },
// //     exit: (dir) => ({
// //       x: -dir * 12,
// //       scale: finalScale * 0.8,
// //       rotateY: safeRotation[1] - dir * 0.5,
// //       opacity: 0,
// //       transition: { duration: 0.8 },
// //     }),
// //     initial: (dir) => ({
// //       x: dir * 12,
// //       scale: finalScale * 0.8,
// //       rotateY: safeRotation[1] + dir * 0.5,
// //       opacity: 0,
// //     }),
// //   };

// //   return (
// //     <motion.group
// //       position-y={yPos}
// //       animate={isActive ? "enter" : "exit"}
// //       initial="initial"
// //       custom={direction}
// //       variants={variants}
// //     >
// //       <Float
// //         speed={2}
// //         rotationIntensity={0.1}
// //         floatIntensity={0.2}
// //         floatingRange={[-0.05, 0.05]}
// //       >
// //         <Model />
// //       </Float>
// //     </motion.group>
// //   );
// // };

// // with carousal effect
// const ProductItem = ({ item, isActive, direction, yPos, isMobile }) => {
//   const Model = item.Component;

//   // ANIMATION FIX:
//   // Both Enter and Exit now have the EXACT same duration and curve.
//   // This creates the "Linear Carousel" feel.
//   const animConfig = { duration: 1.0, ease: "easeInOut" };

//   const safeRotation = item.rotation || [0, 0, 0];
//   const finalScale = isMobile ? item.scale * 0.85 : item.scale;

//   // Distance to slide (needs to be wide enough to clear screen)
//   const slideDistance = 25;

//   const variants = {
//     enter: {
//       x: 0,
//       z: 0,
//       scale: finalScale,
//       rotateY: safeRotation[1],
//       transition: animConfig,
//     },
//     exit: (dir) => ({
//       x: -dir * slideDistance, // Slide OUT to the opposite side
//       z: 0,
//       scale: finalScale,
//       rotateY: safeRotation[1],
//       transition: animConfig,
//     }),
//     initial: (dir) => ({
//       x: dir * slideDistance, // Start form the coming side
//       z: 0,
//       scale: finalScale,
//       rotateY: safeRotation[1],
//     }),
//   };

//   return (
//     <motion.group
//       position-y={yPos}
//       animate={isActive ? "enter" : "exit"}
//       initial="initial"
//       custom={direction}
//       variants={variants}
//     >
//       <Float
//         speed={2}
//         rotationIntensity={0.1}
//         floatIntensity={0.2}
//         floatingRange={[-0.05, 0.05]}
//       >
//         <Model />
//       </Float>
//     </motion.group>
//   );
// };
//
//
// abv working but carousal effect not there
import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  RoundedBox,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
// 1. IMPORT THIS
import { AnimatePresence } from "framer-motion";

export const Experience = ({
  products,
  activeIndex,
  direction,
  isDarkMode,
  theme,
}) => {
  const { viewport } = useThree();
  const pedestalRef = useRef();

  // --- LAYOUT ---
  const isMobile = viewport.width < 5;
  const boxWidth = isMobile ? 2.5 : 5;
  const boxHeight = isMobile ? 5 : 4;

  const boxTopY = -1.2;
  const boxCenterY = boxTopY - boxHeight / 2;
  const productY = boxTopY + 0.2;

  useFrame((state, delta) => {
    if (pedestalRef.current) pedestalRef.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.4 : 0.8} />
      <spotLight
        position={[0, 10, 5]}
        intensity={isDarkMode ? 2 : 1.5}
        angle={0.5}
        penumbra={1}
        castShadow
        color={isDarkMode ? theme.colors.accent : "#ffffff"}
      />
      <Environment preset={isDarkMode ? "city" : "studio"} />

      {/* --- THE PODIUM --- */}
      <group position={[0, boxCenterY, 0]}>
        <RoundedBox
          ref={pedestalRef}
          args={[boxWidth, boxHeight, 4]}
          radius={0.05}
          smoothness={4}
          receiveShadow
          rotation-y={-0.6}
        >
          <meshPhysicalMaterial
            color={isDarkMode ? theme.colors.secondaryDark : "#f0f0f0"}
            roughness={0.2}
            metalness={0.1}
            clearcoat={0.5}
            clearcoatRoughness={0.4}
          />
        </RoundedBox>

        <ContactShadows
          position={[0, boxHeight / 2 + 0.01, 0]}
          opacity={0.5}
          scale={boxWidth}
          blur={2.5}
          far={1}
          color="#000000"
        />
      </group>

      {/* --- RENDER PRODUCTS (FIXED) --- */}
      {/* 2. REPLACE MAP WITH ANIMATEPRESENCE */}
      {/* mode="popLayout" allows both to animate at the exact same time */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <ProductItem
          key={products[activeIndex].id} // KEY IS CRITICAL FOR SWAPPING
          item={products[activeIndex]}
          direction={direction}
          yPos={productY + (products[activeIndex].heightOffset || 0)}
          isMobile={isMobile}
        />
      </AnimatePresence>
    </>
  );
};

// --- CAROUSEL ANIMATION COMPONENT ---
const ProductItem = ({ item, direction, yPos, isMobile }) => {
  const Model = item.Component;

  // // ANIMATION CONFIG
  // const animConfig = { duration: 1.2, ease: "easeInOut" };
  // const safeRotation = item.rotation || [0, 0, 0];
  // const finalScale = isMobile ? item.scale * 0.85 : item.scale;
  // const slideDistance = 25; // Distance to slide

  // const variants = {
  //   // START: Where the new product comes FROM
  //   initial: (dir) => ({
  //     x: dir * slideDistance, // If dir is 1, start Right (25). If -1, start Left (-25)
  //     z: 0,
  //     scale: finalScale,
  //     rotateY: safeRotation[1],
  //     opacity: 0, // Fade in
  //   }),
  //   // CENTER: Where the product sits
  //   enter: {
  //     x: 0,
  //     z: 0,
  //     scale: finalScale,
  //     rotateY: safeRotation[1],
  //     opacity: 1,
  //     transition: animConfig,
  //   },
  //   // END: Where the old product goes TO
  //   exit: (dir) => ({
  //     x: -dir * slideDistance, // Slide OUT to the opposite side
  //     z: 0,
  //     scale: finalScale,
  //     rotateY: safeRotation[1],
  //     opacity: 0, // Fade out
  //     transition: animConfig,
  //   }),
  // };

  // --- SYNCHRONIZED ANIMATION ---
  // Duration: 1.0s (Matches Text)
  // Ease: [0.16, 1, 0.3, 1] (The "Luxury" Curve)
  const transition = { duration: 1.0, ease: [0.16, 1, 0.3, 1] };

  const safeRotation = item.rotation || [0, 0, 0];
  const finalScale = isMobile ? item.scale * 0.85 : item.scale;
  const dist = 25;

  const variants = {
    initial: (dir) => ({
      x: dir * dist,
      scale: finalScale,
      rotateY: safeRotation[1],
      opacity: 0,
    }),
    enter: {
      x: 0,
      scale: finalScale,
      rotateY: safeRotation[1],
      opacity: 1,
      transition,
    },
    exit: (dir) => ({
      x: -dir * dist,
      scale: finalScale,
      rotateY: safeRotation[1],
      opacity: 0,
      transition,
    }),
  };

  return (
    <motion.group
      position-y={yPos}
      // 3. REMOVE isActive (Not needed with AnimatePresence)
      initial="initial"
      animate="enter"
      exit="exit"
      custom={direction}
      variants={variants}
    >
      <Float
        speed={2}
        rotationIntensity={0.1}
        floatIntensity={0.2}
        floatingRange={[-0.05, 0.05]}
      >
        <Model />
      </Float>
    </motion.group>
  );
};
