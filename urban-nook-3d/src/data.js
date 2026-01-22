// // Import your models here
// import { WarriorModel } from "./WarriorModel";
// import { BearModel } from "../src_working_plain_slides/BearModel";
// import { FlowerModel } from "./FlowerModel";
// import { LampModel } from "./LampModel"; // Renaming for consistency

// export const THEME = {
//   colors: {
//     primaryDark: "#2f443d",
//     secondaryDark: "#1a2622",
//     primaryLight: "#fcfdfc",
//     secondaryLight: "#d8efd3",
//     accent: "#f5deb3", // Wheat/Gold color
//     textDark: "#fcfdfc",
//     textLight: "#2f443d",
//   },
// };

// export const PRODUCTS = [
//   {
//     id: 0,
//     name: "WILD BEAR",
//     caption: "Nature's Untamed Spirit",
//     price: "$5,400",
//     description:
//       "Hand-carved replica featuring organic textures and a minimalist finish.",
//     Component: BearModel,
//     scale: 1,
//     rotation: [0, -0.5, 0],
//     heightOffset: 0, // Adjust if model floats too high/low
//   },
//   {
//     id: 1,
//     name: "FRESH VASE",
//     caption: "Ceramic Minimalist",
//     price: "$145.00",
//     description: "A statement piece for the modern home. Smooth matte finish.",
//     Component: FlowerModel,
//     scale: 1,
//     rotation: [0, 0, 0],
//     heightOffset: 0,
//   },
//   {
//     id: 2,
//     name: "MOON LAMP",
//     caption: "Celestial Illumination",
//     price: "$320.00",
//     description:
//       "Bring the night sky indoors with this Levitating orbital lamp.",
//     Component: LampModel,
//     scale: 1,
//     rotation: [0, 0, 0],
//     heightOffset: 0.5,
//   },
//   {
//     id: 3,
//     name: "RETRO TOY",
//     caption: "Playful Nostalgia",
//     price: "$45.00",
//     description: "A throwback to simpler times. Vibrant colors, durable build.",
//     Component: ToyModel,
//     scale: 20,
//     rotation: [0, 0, 0],
//     heightOffset: 0,
//   },
// ];

//
import { WarriorModel } from "./WarriorModel";
import { BearModel } from "./BearModel";
import { FlowerModel } from "./FlowerModel";
import { LampModel } from "./LampModel";

export const THEME = {
  colors: {
    // Dark Mode Palette
    primaryDark: "#2f443d", // Deep Green
    secondaryDark: "#1a2622", // Almost Black Green
    textDark: "#fcfdfc", // White

    // Light Mode Palette
    primaryLight: "#fcfdfc", // White
    secondaryLight: "#d8efd3", // Pale Green
    textLight: "#2f443d", // Deep Green Text

    // Accents
    accent: "#f5deb3", // Wheat/Gold
    glass: "rgba(255, 255, 255, 0.1)", // For Glassmorphism
  },
};

export const PRODUCTS = [
  // {
  //   id: 0,
  //   name: "WARRIOR",
  //   caption: "Ancient Guardian",
  //   price: "$120.00",
  //   description:
  //     "A legendary figure from the forgotten realms. Detailed craftsmanship.A legendary figure from the forgotten realms. Detailed craftsmanship.A legendary figure from the forgotten realms. Detailed craftsmanship.",
  //   Component: WarriorModel,
  //   scale: 5,
  //   rotation: [0, 0, 0],
  //   heightOffset: 0,
  // },
  {
    id: 0,
    name: "WILD BEAR",
    caption: "Nature's Spirit",
    price: "$5,400",
    description:
      "Hand-carved replica featuring organic textures and a minimalist finish.Hand-carved replica featuring organic textures and a minimalist finish.",
    Component: BearModel,
    scale: 1,
    rotation: [0, -0.5, 0],
    heightOffset: 0,
  },
  {
    id: 1,
    name: "FRESH VASE",
    caption: "Ceramic Minimalist",
    price: "$145.00",
    description:
      "A statement piece for the modern home. Smooth matte finish.A statement piece for the modern home. Smooth matte finish. Smooth matte finish.",
    Component: FlowerModel,
    scale: 0.6,
    rotation: [0, 0, 0],
    heightOffset: 0,
  },
  {
    id: 2,
    name: "MOON LAMP",
    caption: "Ceramic Minimalist",
    price: "$145.00",
    description:
      "A statement piece for the modern home. Smooth matte finish.A statement piece for the modern home.for the modern home. Smooth matte finish.",
    Component: LampModel,
    scale: 0.8,
    rotation: [0, 0, 0],
    heightOffset: 0,
  },
  {
    id: 3,
    name: "WARRIOR",
    caption: "Ancient Guardian",
    price: "$120.00",
    description: "A legendary figure from the forgotten realms.",
    Component: WarriorModel,
    scale: 8, // You might need to adjust this depending on the GLB size (try 0.1 or 10 if invisible)
    rotation: [0, 0, 0],
    heightOffset: 0,
  },
];
