import { motion } from "framer-motion";

export default function Section({
    title,
    children,
    subtle = false,
}: {
    title: string;
    children: React.ReactNode;
    subtle?: boolean;
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto px-6"
        >
            <h2 className="font-serif text-3xl mb-10 text-center">
                {title}
            </h2>
            <div
                className={`
          text-lg leading-relaxed
          ${subtle ? "text-[#7A7A7A]" : "text-[#2E2E2E]"}
        `}
            >
                {children}
            </div>
        </motion.section>
    );
}
