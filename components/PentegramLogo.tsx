"use client";
import React from "react";
import { motion } from "framer-motion";

interface PentagramLogoProps {
    className?: string;
    size?: number | string;
}

const PentagramLogo: React.FC<PentagramLogoProps> = ({
    className = "",
    size = 36,
}) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-120 -120 240 240"
        width={size}
        height={size}
        className={className}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    >
        <defs>
            <linearGradient id="pentagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
        </defs>
        <circle
            cx="0"
            cy="0"
            r="78"
            fill="none"
            stroke="url(#pentagramGradient)"
            strokeWidth="5"
        />
        <polygon
            points="0,-98 93,-32 57.5,79 -57.5,79 -93,-32"
            fill="none"
            stroke="white"
            strokeWidth="3"
        />
    </motion.svg>
);

export default PentagramLogo;
