"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const hearts = [
    { color: "#FFC0CB", size: 30 }, // Pink
    { color: "#FF69B4", size: 40 }, // Hot Pink
    { color: "#FFB6C1", size: 25 }, // Light Pink
    { color: "#8B4513", size: 35 }, // Saddle Brown (for contrast/warmth)
    { color: "#DB7093", size: 20 }, // Pale Violet Red
    { color: "#E9967A", size: 45 }, // Dark Salmon
];

const FloatingHearts = () => {
    const [elements, setElements] = useState<any[]>([]);

    useEffect(() => {
        const newElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random percentage
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 5,
            color: hearts[Math.floor(Math.random() * hearts.length)].color,
            size: hearts[Math.floor(Math.random() * hearts.length)].size,
        }));
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute bottom-0"
                    style={{
                        left: `${el.x}%`,
                        color: el.color,
                        fontSize: el.size,
                    }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: -1000,
                        opacity: [0, 1, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "linear",
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
