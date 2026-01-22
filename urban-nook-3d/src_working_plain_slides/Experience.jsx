// import React, { useRef } from "react";
// import { useThree, useFrame } from "@react-three/fiber";
// import { Environment, ContactShadows, Float } from "@react-three/drei";
// import { motion } from "framer-motion-3d";
// import { SunglassesModel, GlassesModel, LensModel } from "./ProductModels";

// const PRODUCTS = [
//   { id: 0, Component: SunglassesModel, scale: 2 },
//   { id: 1, Component: GlassesModel, scale: 2.2 },
//   { id: 2, Component: LensModel, scale: 2.5 },
// ];

// export const Experience = ({ activeIndex, direction }) => {
//   const { viewport } = useThree();
//   const pedestalRef = useRef();

//   // --- RESPONSIVE MATH ---
//   // 1. Calculate the bottom edge of the screen
//   const bottomEdge = -viewport.height / 2;

//   // 2. We want the pedestal top to be at the bottom 1/4 line
//   // Height of view * 0.25 gives us the point 25% up from bottom
//   const pedestalHeight = 3; // Fixed height for the box
//   const targetTopY = bottomEdge + viewport.height * 0.25;

//   // 3. Place center of box so its top edge hits that target
//   const pedestalY = targetTopY - pedestalHeight / 2;

//   // 4. Products sit exactly on top (with small gap for float)
//   const productY = targetTopY + 0.5;

//   // Continuous rotation for pedestal
//   useFrame((state, delta) => {
//     if (pedestalRef.current) {
//       pedestalRef.current.rotation.y += delta * 0.1; // Slow spin
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight
//         position={[5, 10, 5]}
//         intensity={2}
//         angle={0.5}
//         penumbra={1}
//         castShadow
//       />
//       <Environment preset="city" />

//       {/* --- THE PEDESTAL --- */}
//       <group position={[0, pedestalY, 0]}>
//         <mesh ref={pedestalRef} receiveShadow rotation-y={-0.5}>
//           <boxGeometry args={[5, pedestalHeight, 5]} />
//           <meshStandardMaterial
//             color="#f3f4f6" // Premium Marble White
//             roughness={0.1}
//             metalness={0.05}
//           />
//         </mesh>

//         {/* Shadow catcher ON TOP of the pedestal */}
//         <ContactShadows
//           position={[0, pedestalHeight / 2 + 0.01, 0]}
//           opacity={0.4}
//           scale={5}
//           blur={2}
//           far={1.5}
//           color="#000000"
//         />
//       </group>

//       {/* --- THE PRODUCTS --- */}
//       {PRODUCTS.map((product, index) => (
//         <ProductItem
//           key={product.id}
//           item={product}
//           isActive={index === activeIndex}
//           direction={direction}
//           yPos={productY}
//         />
//       ))}
//     </>
//   );
// };

// // Smooth Transition Component
// const ProductItem = ({ item, isActive, direction, yPos }) => {
//   const Model = item.Component;

//   // ANIMATION CONFIGURATION
//   // "easeInOut" is crucial for premium feel (no bouncy springs)
//   const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

//   const variants = {
//     enter: {
//       x: 0,
//       scale: item.scale,
//       rotateY: 0,
//       opacity: 1, // Optional if you handle opacity in material
//       transition,
//     },
//     exit: (dir) => ({
//       x: -dir * 8, // Fly out far
//       scale: item.scale * 0.8, // Shrink slightly
//       rotateY: -dir * 0.5,
//       opacity: 0,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     }),
//     initial: (dir) => ({
//       x: dir * 8, // Start far away
//       scale: item.scale * 0.8,
//       rotateY: dir * 0.5,
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
//       {/* Floating creates the "Alive" feeling */}
//       <Float
//         speed={2}
//         rotationIntensity={0.1}
//         floatIntensity={0.2}
//         floatingRange={[-0.1, 0.1]}
//       >
//         <Model />
//       </Float>
//     </motion.group>
//   );
// };

// abv basic one
// import React, { useRef } from "react";
// import { useThree, useFrame } from "@react-three/fiber";
// import {
//   Environment,
//   ContactShadows,
//   Float,
//   RoundedBox,
// } from "@react-three/drei";
// import { motion } from "framer-motion-3d";
// import { CarModel } from "./CarModel";
// import { BearModel } from "./BearModel";
// import { Model } from "./LampModel"; // <--- IMPORT THIS

// const PRODUCTS = [
//   { id: 0, name: "BMW i8", Component: CarModel, scale: 1 },
//   { id: 1, name: "WILD BEAR", Component: BearModel, scale: 1 },
//   { id: 2, name: "MOON LAMP", Component: Model, scale: 1 },
// ];

// export const Experience = ({ activeIndex, direction }) => {
//   const { viewport } = useThree();
//   const pedestalRef = useRef();

//   // --- DYNAMIC POSITIONING ---
//   const bottomEdge = -viewport.height / 2;
//   const pedestalHeight = 4; // Taller box like the reference
//   // Sit at bottom 20%
//   const targetTopY = bottomEdge + viewport.height * 0.2;
//   const pedestalY = targetTopY - pedestalHeight / 2;

//   // Product sits exactly on top
//   const productY = targetTopY + 0.8;

//   useFrame((state, delta) => {
//     if (pedestalRef.current) {
//       pedestalRef.current.rotation.y -= delta * 0.02; // Very slow, premium spin
//     }
//   });

//   return (
//     <>
//       {/* --- STUDIO LIGHTING (Premium Feel) --- */}
//       <ambientLight intensity={0.7} />
//       <directionalLight
//         position={[-5, 5, 5]}
//         intensity={2}
//         color="#ffffff"
//         castShadow
//       />
//       <spotLight
//         position={[5, 10, 5]}
//         intensity={1.5}
//         angle={0.5}
//         penumbra={1}
//       />
//       <Environment preset="city" />

//       {/* --- THE PEDESTAL --- */}
//       <group position={[0, pedestalY, 0]}>
//         {/* Clean Matte Box (No ugly textures) */}
//         <RoundedBox
//           ref={pedestalRef}
//           args={[5, pedestalHeight, 5]}
//           radius={0.1}
//           smoothness={4}
//           receiveShadow
//           rotation-y={0.5}
//         >
//           <meshStandardMaterial
//             color="#e0e0e0" // Light Grey
//             roughness={0.3} // Slightly reflective (Premium plastic/stone)
//             metalness={0.1}
//           />
//         </RoundedBox>

//         {/* SHADOW FIX: Placed exactly on top surface */}
//         <ContactShadows
//           position={[0, pedestalHeight / 2 + 0.01, 0]}
//           opacity={0.5}
//           scale={6}
//           blur={2}
//           far={2}
//           color="#000000"
//         />
//       </group>

//       {/* --- THE PRODUCTS --- */}
//       {PRODUCTS.map((product, index) => (
//         <ProductItem
//           key={product.id}
//           item={product}
//           isActive={index === activeIndex}
//           direction={direction}
//           yPos={productY}
//         />
//       ))}
//     </>
//   );
// };

// // Transition Logic
// const ProductItem = ({ item, isActive, direction, yPos }) => {
//   const Model = item.Component;

//   // Smoother, tighter animation
//   const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

//   const variants = {
//     enter: {
//       x: 0,
//       scale: item.scale,
//       opacity: 1,
//       transition,
//     },
//     exit: (dir) => ({
//       x: -dir * 6, // REDUCED: Don't fly too far
//       scale: item.scale * 0.9,
//       opacity: 0,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     }),
//     initial: (dir) => ({
//       x: dir * 6, // REDUCED start distance
//       scale: item.scale * 0.9,
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
//       {/* Gentle Floating */}
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

// texture shape okaysih

// new
import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

import { ToyModel } from "./ToyModel";
import { BearModel } from "./BearModel";
import { MinionModel } from "./MinionModel";
import { FlowerModel } from "./FlowerModel";
import { Model } from "./LampModel";

const PRODUCTS = [
  {
    id: 0,
    name: "TOY",
    Component: ToyModel,
    scale: 1,
    rotation: [0, 0, 0],
  },
  // 3. Flowers
  {
    id: 1,
    name: "FRESH VASE",
    Component: FlowerModel,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    id: 2,
    name: "MOON LAMP",
    Component: Model,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    id: 0,
    name: "WILD BEAR",
    Component: BearModel,
    scale: 1,
    rotation: [0, -0.5, 0],
  },
];

export const Experience = ({ activeIndex, direction }) => {
  const { viewport } = useThree();
  const pedestalRef = useRef();

  // Load Texture (Optional: If you want texture, uncomment.
  // For premium look, a solid material often looks better than a low-res texture)
  /*
  const textureProps = useTexture({ map: '/marble.jpg' });
  textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  textureProps.map.repeat.set(2, 1);
  */

  // --- 1. DYNAMIC RESPONSIVE LOGIC ---
  const isMobile = viewport.width < 4.5; // Threshold for mobile devices

  // Podium Size: Smaller on mobile (3.2), Standard on Desktop (5)
  const boxWidth = isMobile ? 3.2 : 5;
  const boxDepth = isMobile ? 3.2 : 5;
  const pedestalHeight = 4; // Height stays same to keep it anchored

  // Shadow Size: Needs to match the box width
  const shadowScale = isMobile ? 3.5 : 5.5;

  // --- POSITIONING ---
  const bottomEdge = -viewport.height / 2;
  // On mobile, we might want it slightly lower to give more room for the big text
  const percentFromBottom = isMobile ? 0.15 : 0.18;

  const targetTopY = bottomEdge + viewport.height * percentFromBottom;
  const pedestalY = targetTopY - pedestalHeight / 2;
  const productY = targetTopY + 0.5;

  useFrame((state, delta) => {
    if (pedestalRef.current) {
      pedestalRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />
      <spotLight
        position={[5, 10, 5]}
        intensity={2}
        angle={0.4}
        penumbra={0.5}
      />
      <Environment preset="city" />

      {/* --- THE DYNAMIC PEDESTAL --- */}
      <group position={[0, pedestalY, 0]}>
        <RoundedBox
          ref={pedestalRef}
          // DYNAMIC ARGS: [Width, Height, Depth]
          args={[boxWidth, pedestalHeight, boxDepth]}
          radius={0.05}
          smoothness={4}
          receiveShadow
          rotation-y={-0.6}
        >
          <meshPhysicalMaterial
            color="#e0e0e0"
            roughness={0.2}
            metalness={0.1}
            clearcoat={0.5}
            clearcoatRoughness={0.4}
          />
        </RoundedBox>

        {/* DYNAMIC SHADOW SCALE */}
        <ContactShadows
          position={[0, pedestalHeight / 2 + 0.01, 0]}
          opacity={0.4}
          scale={shadowScale}
          blur={2.5}
          far={1.5}
          color="#000000"
        />
      </group>

      {/* --- THE PRODUCTS --- */}
      {PRODUCTS.map((product, index) => (
        <ProductItem
          key={product.id}
          item={product}
          isActive={index === activeIndex}
          direction={direction}
          yPos={productY}
          isMobile={isMobile} // Pass this down if you want to scale products too
        />
      ))}
    </>
  );
};

const ProductItem = ({ item, isActive, direction, yPos, isMobile }) => {
  const Model = item.Component;
  const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  // SAFETY CHECK
  const safeRotation = item.rotation || [0, 0, 0];

  // Optional: Reduce product scale slightly on mobile if they look too big for the new box
  const mobileScaleAdjustment = isMobile ? 0.85 : 1;
  const finalScale = item.scale * mobileScaleAdjustment;

  const variants = {
    enter: {
      x: 0,
      scale: finalScale,
      rotateY: safeRotation[1],
      opacity: 1,
      transition,
    },
    exit: (dir) => ({
      x: -dir * 15,
      scale: finalScale * 0.8,
      rotateY: safeRotation[1] - dir * 0.5,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
    initial: (dir) => ({
      x: dir * 15,
      scale: finalScale * 0.8,
      rotateY: safeRotation[1] + dir * 0.5,
      opacity: 0,
    }),
  };

  return (
    <motion.group
      position-y={yPos}
      animate={isActive ? "enter" : "exit"}
      initial="initial"
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
