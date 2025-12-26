"use client"

import { useState } from "react";
import LetterOverlay from "./components/LetterOverlay";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center flex-col">
        <h1 className="font-serif text-3xl text-center max-w-xl mb-6">
          I built this because loving you needed a place to live.
        </h1>
        <button
          onClick={() => { setIsOpen(true); }}
          className="bg-[#2E2E2E]
    text-[#FAF7F3]
    px-8 py-3.5
    rounded-2xl
    text-base
    tracking-wide
    shadow-md
    transition-all
    duration-300
    ease-in-out
    hover:bg-[#3A3A3A]
    hover:-translate-y-0.5
    focus:outline-none
    focus:ring-2
    focus:ring-[#C6A77D]/40

">
          Click Me ❤️
        </button>

      </div>

      <LetterOverlay open={isOpen} onClose={() => { setIsOpen(false) }} />
    </>
  );
}
