"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LetterOverlay({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {

    const router = useRouter();


    const [showLine, setShowLine] = useState(false);

    return (
        <div
            className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-[#FAF7F3]/90 backdrop-blur-sm
        transition-opacity duration-500
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
        >
            <div
                className={`
          max-w-xl w-[90%]
          bg-[#F1ECE6]
          rounded-2xl
          p-8
          shadow-2xl
          transform transition-all duration-700 ease-out
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
            >
                <div className="font-serif text-lg leading-relaxed text-[#2E2E2E]">
                    I didn't know when it started.
                    <br /><br />
                    <div className="my-6 flex flex-col items-center">
                        <div
                            onClick={() => setShowLine(!showLine)}
                            className="
      group
      relative
      w-40 h-52
      rounded-2xl
      overflow-hidden
      shadow-lg
      cursor-pointer
      transition-shadow
      duration-700
      hover:shadow-xl
    "
                        >
                            <Image
                                src="/her.jpg"
                                alt="Her"
                                fill
                                priority
                                className="
        object-cover
        grayscale
        opacity-90
        transition-all
        duration-1000
        ease-in-out
        group-hover:grayscale-0
        group-hover:opacity-100
        group-hover:scale-[1.03]
      "
                            />
                        </div>

                        {/* REVEALED LINE */}
                        <p
                            className={`
      mt-4
      text-sm
      italic
      text-[#7A7A7A]
      transition-all
      duration-700
      ${showLine ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
    `}
                        >
                            This is where my calm lives.
                        </p>
                    </div>



                    Somewhere between ordinary days and quiet moments,
                    you became a part of my thoughts — gently, naturally,
                    without asking.
                    <br /><br />
                    So before anything else, I wanted you to read this.
                </div>

                <button
                    onClick={() => router.push("/story")}
                    className="
            mt-8 text-sm text-[#7A7A7A]
            hover:text-[#2E2E2E]
            transition
          "
                >
                    Continue →
                </button>
            </div>
        </div>
    );
}
