"use client"

import { useState } from "react";
import LetterOverlay from "./components/LetterOverlay";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* <div className="w-screen h-screen flex items-center justify-center flex-col">
        <h1 className="font-serif text-3xl mb-4">
          I’m really glad it’s you 🤍
        </h1>

        <p className="text-lg text-[#2E2E2E] max-w-md">
          Not for an occasion.
          Not for a reason.
          Just because ✨
        </p>
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

      </div> */}

      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FAF7F3] px-6">
        <div className="space-y-6">
          <p className="text-[#7A7A7A]">
            ✧･ﾟ: *✧･ﾟ:* ❤️ *:･ﾟ✧*:･ﾟ✧
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#2E2E2E]">
            For you. Always.
          </h1>

          <p className="text-lg text-[#2E2E2E] max-w-md mx-auto">
            I didn’t wait for a special day.
            <br />
            I just wanted you to have this ✨
          </p>

          <p className="text-[#7A7A7A]">
            ✧･ﾟ: *✧･ﾟ:* 🌱 *:･ﾟ✧*:･ﾟ✧
          </p>

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
    focus:ring-[#C6A77D]/40">
            Begin 🌷 ❤️
          </button>
        </div>
      </section>


      <LetterOverlay open={isOpen} onClose={() => { setIsOpen(false) }} />
    </>
  );
}
