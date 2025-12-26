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
          relative
          transform transition-all duration-700 ease-out
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
            >
                <div className="my-6 flex flex-col items-center absolute top-0 right-5 ">
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
                                rotate-[6deg]
                                "
                    >
                        <Image
                            src="/her.jpg"
                            alt="Her"
                            fill
                            priority
                            className="
                                object-cover
                            blur-sm
                            opacity-95
                            transition-all
                            duration-1000
                            ease-in-out
                            group-hover:blur-none
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

                <div className="font-serif text-lg leading-relaxed text-[#2E2E2E] space-y-4">
                    <p>
                        I just want you to know something.
                    </p>

                    <p>
                        I am really, genuinely into you.
                    </p>

                    <p>
                        Not in a dramatic way.
                        <br />
                        Not in a loud way.
                    </p>

                    <p>
                        But in the way where being with you<br />
                        makes my days lighter,<br />
                        my thoughts calmer,<br />
                        and my heart feel settled.<br />
                    </p>

                    <p>
                        I love how it feels to be with you.
                        <br />
                        I love how natural it feels.
                    </p>

                    <p>
                        I’m happy — truly happy —
                        because it’s you.
                    </p>

                    <p>
                        And I just wanted you to read that
                        before anything else.
                    </p>
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
