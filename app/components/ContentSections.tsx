import Section from "./Section";
import PasswordSection from "./PasswordSection";

export default function ContentSections() {
    return (
        <div className="space-y-32 py-32">
            <Section title="Our Story">
                <p>It didn’t begin loudly. It just stayed.</p>
            </Section>

            <Section title="Things I Love About You">
                <ul className="space-y-4">
                    <li>The way you make normal days lighter.</li>
                    <li>How your presence feels steady.</li>
                    <li>The calm you don’t even notice you bring.</li>
                </ul>
            </Section>

            <Section title="Letters I Never Sent">
                <p className="italic">
                    Some feelings don’t need replies.
                    They just want honesty.
                </p>
            </Section>

            <Section title="Us, In Frames">
                <p>Moments I quietly keep.</p>
            </Section>

            <Section title="What I Hope For">
                <p className="text-center">
                    I don’t want promises.
                    Just something real.
                </p>
            </Section>

            <PasswordSection />
        </div>
    );
}
