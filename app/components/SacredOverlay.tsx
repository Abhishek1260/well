"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = Array.from(
    { length: 20 },
    (_, i) => `/photos/sacred/${i + 1}.jpg`
);

export default function SacredOverlay({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    {/* COLLAGE BACKGROUND */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8">
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className={`relative h-40 rounded-xl overflow-hidden ${i % 3 === 0
                                    ? "rotate-2"
                                    : i % 3 === 1
                                        ? "-rotate-2"
                                        : "rotate-1"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>
                        ))}
                    </div>

                    {/* FADE + BLUR LAYER */}
                    <div className="absolute inset-0 bg-[#FAF7F3]/75 backdrop-blur-md" />

                    {/* LETTER WINDOW */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="
              relative
              z-10
              bg-[#F1ECE6]
              w-full
              md:w-1/2
              max-w-2xl
              rounded-3xl
              p-10
              shadow-2xl
              text-center
            "
                    >
                        <p className="font-serif text-2xl leading-loose text-[#2E2E2E]">
                            I love you
                            <br />
                            so much.
                        </p>

                        <p className="mt-8 text-lg leading-relaxed text-[#2E2E2E]">
                            Not loudly.
                            <br />
                            Not perfectly.
                            <br />
                            But honestly —
                            <br />
                            in a way that chose you
                            every single day.
                        </p>

                        {/* optional close */}
                        <button
                            onClick={onClose}
                            className="mt-10 text-sm text-[#7A7A7A] hover:text-[#2E2E2E]"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
