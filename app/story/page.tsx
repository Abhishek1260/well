"use client";

import Section from "../components/Section";
import PasswordSection from "../components/PasswordSection";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SacredOverlay from "../components/SacredOverlay";

export default function StoryPage() {

    const loveCards = [
        {
            text: "The way you make normal days lighter.",
            image: "/photos/love/1.jpg",
        },
        {
            text: "How you listen without trying to fix everything.",
            image: "/photos/love/2.jpg",
        },
        {
            text: "Your quiet patience.",
            image: "/photos/love/3.jpg",
        },
        {
            text: "The calm you carry without noticing.",
            image: "/photos/love/4.jpg",
        },
    ];

    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    const PASSWORD = "us";

    const frames = [
        { src: "1.jpg", rotate: "-rotate-2", z: "z-10", mt: "mt-0" },
        { src: "2.jpg", rotate: "rotate-3", z: "z-20", mt: "mt-12" },
        { src: "3.jpg", rotate: "-rotate-1", z: "z-30", mt: "-mt-8" },
        { src: "4.jpg", rotate: "rotate-2", z: "z-20", mt: "mt-6" },
        { src: "5.jpg", rotate: "-rotate-3", z: "z-10", mt: "-mt-6" },
        { src: "6.jpg", rotate: "rotate-1", z: "z-20", mt: "mt-4" },
    ];


    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#FAF7F3] min-h-screen py-32 space-y-32"
        >
            <Section title="Our Story">
                <p>It didn’t begin loudly. It just stayed.</p>

                <div className="flex justify-center my-12">
                    <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-xl group">
                        <Image
                            src="/photos/story-1.jpg"
                            alt="Memory"
                            fill
                            className="        object-cover
    blur-sm
    opacity-95
    transition-all
    duration-1000
    ease-in-out
    group-hover:blur-none
    group-hover:scale-[1.03]"
                        />
                    </div>
                </div>

            </Section>

            <Section title="Things I Love About You">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {loveCards.map((card, i) => (
                        <div
                            key={i}
                            className="
                            hover:-translate-y-1 transition-transform duration-300

            group
            bg-[#F1ECE6]
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition
            hover:shadow-lg
          "
                        >
                            {/* PHOTO */}
                            <div className="relative h-56 w-full overflow-hidden  ">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    className="
                object-cover
                grayscale
                transition-all
                duration-700
                ease-in-out
                group-hover:grayscale-0
                group-hover:scale-[1.03]
              "
                                />
                            </div>

                            {/* TEXT */}
                            <div className="p-6">
                                <p className="text-[#2E2E2E] leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </Section>

            <section className="max-w-2xl mx-auto px-6">
                <h2 className="font-serif text-3xl mb-12 text-center">
                    Letters I Never Sent
                </h2>

                {/* LETTER TEXT – PART 1 */}
                <p className="font-serif italic text-lg leading-loose text-[#2E2E2E]">
                    There were nights I typed your name and erased it.
                    <br />
                    Mornings I carried conversations we never had.
                    <br /><br />
                    Not because I didn’t want to say things —
                    but because some feelings felt too fragile
                    to risk losing.
                </p>

                {/* PHOTO – FLOATING MEMORY */}
                <div className="relative my-16 flex justify-end">
                    <div
                        className="
            group
            relative
            w-44 h-60
            rotate-2
            rounded-2xl
            overflow-hidden
            shadow-lg
          "
                    >
                        <Image
                            src="/photos/letters/1.jpg"
                            alt=""
                            fill
                            className="
              object-cover
              grayscale
              transition-all
              duration-1000
              ease-in-out
              group-hover:grayscale-0
              group-hover:scale-[1.02]
            "
                        />
                    </div>
                </div>

                {/* LETTER TEXT – PART 2 */}
                <p className="font-serif italic text-lg leading-loose text-[#2E2E2E]">
                    So I kept them here.
                    <br />
                    Between silence and hope.
                    <br /><br />
                    Unsent — but never unfelt.
                </p>
            </section>

            <section className="max-w-5xl mx-auto px-6">
                <h2 className="font-serif text-3xl mb-16 text-center">
                    Us, In Frames
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 relative">
                    {frames.map((frame, i) => (
                        <div
                            key={i}
                            className={`
              group
              relative
              ${frame.z}
              ${frame.mt}
              ${frame.rotate}
              transition-transform
              duration-700
              hover:rotate-0
              hover:z-40
            `}
                        >
                            <div className="
              relative
              rounded-2xl
              overflow-hidden
              shadow-lg
              bg-white
            ">
                                <Image
                                    src={`/photos/frames/${frame.src}`}
                                    alt=""
                                    width={400}
                                    height={600}
                                    className="
                  object-cover
                  ring-1 ring-black/5
                  grayscale
                  transition-all
                  duration-700
                  ease-in-out
                  group-hover:grayscale-0
                  group-hover:scale-[1.02]
                "
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm italic text-[#7A7A7A]">
                    Not posed. Just lived.
                </p>
            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="
        max-w-2xl
        mx-auto
        px-6
        py-32
        bg-[#F1ECE6]/40 rounded-[4rem]
        text-center
      "
            >
                <h2 className="font-serif text-3xl mb-16">
                    What I Hope For
                </h2>

                <div className="space-y-8 text-lg leading-loose text-[#2E2E2E]">
                    <p>I don’t hope for perfection.</p>

                    <p>I don’t hope for certainty.</p>

                    <p className="text-[#7A7A7A]">
                        I don’t even hope for answers.
                    </p>

                    <div className="w-12 h-px bg-[#C6A77D] mx-auto opacity-40" />

                    <p className="font-serif text-xl">
                        I just hope for something honest,
                        something kind,
                        something that doesn’t rush.
                    </p>
                </div>
            </motion.section>

            <>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-md w-full text-center">
                        <h2 className="font-serif text-3xl mb-12">Only for You</h2>

                        <input
                            type="password"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="A word you know"
                            className="
              w-full
              text-center
              bg-transparent
              border-b
              border-[#C6A77D]
              py-3
              text-lg
              focus:outline-none
            "
                        />

                        <button
                            onClick={() => {
                                if (input.toLowerCase() === PASSWORD) {
                                    setOpen(true);
                                } else {
                                    setInput("");
                                }
                            }}
                            className="mt-6 text-sm text-[#7A7A7A] hover:text-[#2E2E2E]"
                        >
                            Enter
                        </button>
                    </div>
                </section>

                {/* SACRED OVERLAY */}
                <SacredOverlay open={open} onClose={() => setOpen(false)} />
            </>
        </motion.main>
    );
}
