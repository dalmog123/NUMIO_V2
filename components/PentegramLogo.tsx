"use client";
import React, { useEffect, useState } from "react";

interface PentagramLogoProps {
    className?: string;
    size?: number | string;
}

const PentagramLogo: React.FC<PentagramLogoProps> = ({
    className = "",
    size = 185
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={className} style={{ width: size, height: size }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-120 -120 240 240"
                width="100%"
                height="100%"
                className={`${!isMobile ? 'animate-spin' : ''}`}
                style={{
                    // Only animate on desktop, static on mobile
                    animationDuration: '4s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite'
                }}
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
            </svg>
        </div>
    );
};

export default PentagramLogo;