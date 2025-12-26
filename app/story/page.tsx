"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SacredOverlay from "../components/SacredOverlay";
import OurStory from "../components/OurStory";
export default function StoryPage() {

    const loveCards = [
        {
            text: "The way you make things feel easy. Even on days when my mind is full, being with you feels calm — like I don’t have to try so hard anymore.",
            image: "/photos/love/1.jpg",
        },
        {
            text: "How you listen — really listen. Not just to words, but to pauses, moods, and silences that don’t always need explaining.",
            image: "/photos/love/2.jpg",
        },
        {
            text: "Your patience with me. In the way you give things time, in the way you don’t rush feelings, and in how you let things grow naturally.",
            image: "/photos/love/3.jpg",
        },
        {
            text: "The way you show up — quietly, consistently. You don’t demand attention, but somehow, you hold mine completely.",
            image: "/photos/love/4.jpg",
        },
    ];

    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    const PASSWORD = ["abhira", "rabhi"];

    const frames = [
        { src: "1.jpg", rotate: "-rotate-2", z: "z-10", mt: "mt-0", mh: '-mr-10' },
        { src: "2.jpg", rotate: "rotate-3", z: "z-20", mt: "mt-12", mh: '-mr-10' },
        { src: "3.jpg", rotate: "-rotate-1", z: "z-30", mt: "-mt-8", mh: '-ml-10' },
        { src: "4.jpg", rotate: "rotate-2", z: "z-20", mt: "mt-6", mh: '-mr-10' },
        { src: "5.jpg", rotate: "-rotate-3", z: "z-10", mt: "-mt-8", mh: '-mr-10' },
        { src: "6.jpg", rotate: "rotate-1", z: "z-20", mt: "mt-4", mh: '-ml-15' },
    ];


    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#FAF7F3] min-h-screen py-32 space-y-32"
        >

            <OurStory />

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
                                    unoptimized
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
                    There were so many moments
                    when I wanted to tell you things.
                    <br />
                    Not big declarations —
                    just small truths that showed up quietly
                    and stayed with me longer than I expected.
                    <br /><br />
                    I wrote messages in my head.
                    <br />
                    I replayed conversations we never had.
                    <br /><br />
                    Not because I was unsure about you,
                    but because I cared enough
                    to not rush something that felt this real.
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
                            unoptimized
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
                    There were times when waiting wasn’t easy.
                    <br />
                    Times when saying nothing took more effort
                    than saying everything.
                    <br /><br />
                    But I chose patience over pressure.
                    <br />
                    I chose honesty over urgency.
                    <br /><br />
                    And now, looking back,
                    I’m glad those letters stayed unsent —
                    because they were never meant to convince you.
                    <br /><br />
                    They were just proof
                    of how deeply you already mattered to me.
                </p>
                <br />
                <br />
                <p className="font-serif italic text-lg leading-loose text-[#2E2E2E]">
                    Some things were always meant to be said later.
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
              ${frame.mh}
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
                                    unoptimized
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

                <div className="font-serif text-lg leading-loose text-[#2E2E2E] space-y-8">
                    <p>
                        I don’t hope for perfection.
                    </p>

                    <p>
                        I don’t hope for grand promises
                        or things said too soon.
                    </p>

                    <p className="text-[#7A7A7A]">
                        I don’t even hope that everything
                        will always be easy.
                    </p>

                    <p>
                        I just hope we keep choosing each other —
                        on ordinary days,
                        in quiet moments,
                        and even when things feel uncertain.
                    </p>

                    <p>
                        I hope we keep talking honestly,
                        listening patiently,
                        and growing at our own pace.
                    </p>

                    <p className="font-serif text-xl">
                        And more than anything,
                        I hope we never stop feeling
                        at home with each other.
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
                                if (PASSWORD.includes(input.toLowerCase())) {
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
