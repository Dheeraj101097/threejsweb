import React, { useState, useEffect } from "react";

export default function Overlay({ isDarkMode, toggleTheme }) {
  const textColor = isDarkMode ? "text-nook-text-dark" : "text-nook-text-light";
  const borderColor = isDarkMode ? "border-white/20" : "border-black/20";

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between p-8 md:p-12 transition-colors duration-1000 ${textColor}`}
    >
      {/* Header */}
      <nav className="flex justify-between items-center w-full pointer-events-auto">
        <div className="flex flex-col">
          <h1 className="text-xl font-serif font-bold tracking-widest uppercase">
            Urban Nook
          </h1>
          <span className="text-[10px] opacity-50 tracking-widest uppercase">
            Est. 2026
          </span>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={toggleTheme}
            className={`w-12 h-6 rounded-full border ${borderColor} flex items-center px-1 transition-all`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-current transition-transform duration-300 ${isDarkMode ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
          <a
            href="#"
            className="hidden md:block text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
          >
            Shop
          </a>
        </div>
      </nav>

      {/* Initial Center Text (Fades out on Scroll in Scene logic via Opacity, 
          but here is static for interaction hint) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">
          Scroll to Reveal
        </span>
        <div
          className={`h-12 w-[1px] mx-auto mt-4 ${isDarkMode ? "bg-white" : "bg-black"} opacity-20`}
        ></div>
      </div>
      {/* ADD THIS: New Scrolling Text */}
      <ProductInfo isDarkMode={isDarkMode} />
      {/* Footer */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-nook-accent">
            Next Drop
          </span>
          <span className="text-sm font-serif italic opacity-80">
            The Lunar Collection
          </span>
        </div>

        <div className="text-xs font-mono opacity-40">01 / 04</div>
      </div>
    </div>
  );
}
// --- NEW SUB-COMPONENT ---
function ProductInfo({ isDarkMode }) {
  const [scrollPct, setScrollPct] = useState(0);

  // Track scroll manually for HTML text
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(window.scrollY / h);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic: 0.4-0.65 = BMW, 0.65-1.0 = BEAR
  // Inside ProductInfo function:
  // Adjust these values to match when the sections appear on screen
  const showBMW = scrollPct > 0.35 && scrollPct < 0.65;
  const showBear = scrollPct > 0.65;

  const textColor = isDarkMode ? "text-white" : "text-black";
  const containerClass = `absolute top-1/2 right-8 md:right-24 transform -translate-y-1/2 text-right transition-opacity duration-500 ${textColor}`;

  return (
    <>
      {/* BMW TEXT */}
      <div
        className={`${containerClass} ${showBMW ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
      >
        <h2 className="text-6xl font-bold uppercase italic text-green-500">
          BMW i8
        </h2>
        <p className="text-sm tracking-[0.3em] mt-2 border-b border-gray-500 pb-4">
          VISIONARY HYBRID
        </p>
        <div className="mt-4 flex flex-col items-end gap-2">
          <span className="font-mono text-3xl">$148,000</span>
          <button className="px-6 py-2 border border-current hover:bg-green-500 hover:text-black transition-colors uppercase font-bold text-xs tracking-widest">
            View 3D
          </button>
        </div>
      </div>

      {/* BEAR TEXT */}
      <div
        className={`${containerClass} ${showBear ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
      >
        <h2 className="text-6xl font-bold uppercase text-yellow-500">
          Wild Bear
        </h2>
        <p className="text-sm tracking-[0.3em] mt-2 border-b border-gray-500 pb-4">
          NATURE COLLECTION
        </p>
        <div className="mt-4 flex flex-col items-end gap-2">
          <span className="font-mono text-3xl">Priceless</span>
          <button className="px-6 py-2 border border-current hover:bg-yellow-500 hover:text-black transition-colors uppercase font-bold text-xs tracking-widest">
            Adopt
          </button>
        </div>
      </div>
    </>
  );
}
