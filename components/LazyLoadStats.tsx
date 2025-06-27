"use client";
import { motion } from "framer-motion";

const stats = [
    { value: "33%", label: "COST SAVED" },
    { value: "40%", label: "TIME SAVED" },
    { value: "25%", label: "LESS RESOURCES" },
];

export default function LazyLoadStats() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-row justify-center gap-2 sm:gap-6 mt-6 px-4 sm:px-0"
        >
            {stats.map((item, i) => (
                <div key={i} className="relative group">
                    <div className="pointer-events-none absolute inset-0 bg-white rounded-xl blur opacity-20 sm:group-hover:opacity-40 transition-opacity w-full h-full" />
                    <div className="relative min-w-[80px] max-w-[90px] px-2 py-2 sm:min-w-[110px] sm:px-8 sm:py-6 bg-zinc-900 border border-zinc-700 rounded-xl h-full flex flex-col items-center justify-center">
                        <div className="text-base sm:text-3xl font-black text-white mb-2">{item.value}</div>
                        <div className="text-[10px] sm:text-sm text-zinc-400 font-medium h-[28px] sm:h-[32px] flex items-center justify-center text-center">
                            {item.label}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
