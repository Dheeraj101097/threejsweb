import React from "react";

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
