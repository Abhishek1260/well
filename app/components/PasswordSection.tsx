"use client";

import { useState } from "react";

export default function PasswordSection() {
    const [input, setInput] = useState("");
    const [unlocked, setUnlocked] = useState(false);

    const correctPassword = "us"; // change this

    return (
        <section className="max-w-xl mx-auto px-6 text-center pb-32">
            <h2 className="font-serif text-3xl mb-6">
                Only for You
            </h2>

            {!unlocked ? (
                <>
                    <input
                        type="password"
                        placeholder="Enter the word you know"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="
              w-full
              px-4 py-3
              rounded-xl
              border
              border-[#C6A77D]
              bg-transparent
              mb-4
              focus:outline-none
            "
                    />

                    <button
                        onClick={() => {
                            if (input.toLowerCase() === correctPassword) {
                                setUnlocked(true);
                            }
                        }}
                        className="
              bg-[#2E2E2E]
              text-[#FAF7F3]
              px-6 py-3
              rounded-xl
            "
                    >
                        Enter
                    </button>
                </>
            ) : (
                <p className="mt-8 font-serif text-xl leading-relaxed">
                    After you, my days are brighter —
                    and my nights don’t scare me anymore.
                </p>
            )}
        </section>
    );
}
