"use client";

import { useEffect, useState } from "react";

export default function OneTimeMessage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("one-time-message-seen");

        if (!seen) {
            setShow(true);
            localStorage.setItem("one-time-message-seen", "true");
        }
    }, []);

    if (!show) return null;

    return (
        <div className="my-32 text-center">
            <p className="font-serif text-sm italic text-[#7A7A7A]">
                I don’t know when you’re reading this.
                <br />
                But I know I meant every word.
            </p>
        </div>
    );
}
