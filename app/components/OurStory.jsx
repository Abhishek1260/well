import Image from "next/image";

export default function OurStory() {
    return <section className="max-w-3xl mx-auto px-6 py-32">
        {/* Section Title */}
        <h2 className="font-serif text-3xl mb-16 text-center text-[#2E2E2E]">
            Our Story
        </h2>

        {/* Timeline */}
        <div className="space-y-16 font-serif text-lg leading-loose text-[#2E2E2E]">

            {/* School */}
            <div>
                <p className="mb-4">
                    It started much earlier than we both realized.
                </p>
                <p>
                    Back in school, I had a quiet crush on you —
                    the kind you carry silently,
                    never knowing if it will ever mean something.
                </p>
                <p className="mt-4">
                    Life moved on, and so did we.
                    We never really got the chance back then.
                </p>
            </div>

            {/* Distance */}
            <div>
                <p>
                    When I moved to Mumbai,
                    time and distance slowly took over.
                </p>
                <p className="mt-4">
                    We went from talking often
                    to barely being in touch at all.
                    Not because we didn’t care —
                    but because life happened.
                </p>
            </div>

            {/* August 7 */}
            <div>
                <p>
                    Then, while I was coming back for a break,
                    something in me felt certain.
                </p>
                <p className="mt-4">
                    I asked you if we could meet —
                    just a simple meet-up,
                    nothing planned,
                    nothing forced.
                </p>
                <p className="mt-4">
                    On <span className="italic">7th August</span>,
                    we finally did.
                </p>
                <p className="mt-4">
                    And everything felt… easy.
                    The vibes matched.
                    The conversations flowed.
                    It felt familiar —
                    in the best way.
                </p>
            </div>

            {/* Realization */}
            <div>
                <p>
                    A few days after that,
                    I realized something clearly.
                </p>
                <p className="mt-4">
                    I wasn’t just happy to see you.
                    I was starting to really like you —
                    again, but this time deeper.
                </p>
            </div>

            {/* Proposal */}
            <div>
                <p>
                    On <span className="italic">7th September</span>,
                    I told you how I felt.
                </p>
                <p className="mt-4">
                    I didn’t say it in person.
                    I didn’t make it dramatic.
                    I just told the truth —
                    honestly, over a phone call.
                </p>
                <p className="mt-4">
                    You didn’t reply right away.
                </p>
            </div>

            {/* Timeline */}
            <div>
                <p>
                    Instead of rushing you,
                    I decided to do what felt right to me.
                </p>
                <p className="mt-4">
                    I made you a timeline —
                    not to convince you,
                    but to show you
                    how everything had quietly led here.
                </p>
                <div className="mt-10 text-center">
                    <a
                        href="https://www.figma.com/proto/6NjBQ0gIx94hHEiUYJsmvG/Untitled--Copy-?node-id=0-1&t=VzsOY0cD4VQqiTnb-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-block
                        font-serif
                        text-sm
                        text-[#7A7A7A]
                        hover:text-[#2E2E2E]
                        transition
                        "
                    >
                        View the timeline →
                    </a>
                </div>
            </div>

            {/* Yes */}
            <div>
                <p>
                    And then —
                </p>
                <p className="mt-4 font-semibold">
                    You told me you loved me too.
                </p>
                <p className="mt-4">
                    Not suddenly.
                    Not impulsively.
                    But honestly.
                </p>
            </div>

            {/* Closure */}
            <div>
                <p>
                    Looking back,
                    it feels like we didn’t rush into anything.
                </p>
                <p className="mt-4">
                    We found each other again
                    at the right time,
                    with clearer hearts,
                    and the courage to choose each other.
                </p>
            </div><div className="flex justify-center my-12">
                <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-xl group -rotate-3 hover:rotate-0 transition-transform duration-700 ease-in-out">
                    <Image
                        src="/photos/story-1.jpg"
                        alt="Memory"
                        unoptimized
                        fill
                        className="        
                            object-cover
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

        </div>
    </section>
}