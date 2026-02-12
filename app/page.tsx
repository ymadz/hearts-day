"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FloatingHearts from "./components/FloatingHearts";

// Define the stages
// 0: Ask
// 1: Teary
// 2: Cry
// 3: Heavy Cry
// 4: Heavy Cry + 20% Tears
// 5: Heavy Cry + 40% Tears
// 6: Heavy Cry + 60% Tears
// 7: Heavy Cry + 80% Tears
// 8: Heavy Cry + 100% Tears
// 9: Hostage

export default function Home() {
    const [stage, setStage] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLetterOpen, setIsLetterOpen] = useState(false);

    const handleNo = () => {
        if (stage < 9) {
            setStage(stage + 1);
        }
    };

    const handleYes = () => {
        setIsSuccess(true);
    };

    // Determine current image based on stage
    const getCurrentImage = () => {
        if (isSuccess) return "/letter.png"; // Changed to letter for consistency if needed, but logic handled in render
        if (stage === 0) return "/ask.png";
        if (stage === 1) return "/teary.png";
        if (stage === 2) return "/cry.png";
        if (stage >= 3 && stage < 9) return "/heavycry.png";
        if (stage === 9) return "/hostage.png";
        return "/ask.png";
    };

    // Tears height calculation
    const getTearsHeight = () => {
        if (stage < 4) return 0;
        if (stage === 4) return 20;
        if (stage === 5) return 40;
        if (stage === 6) return 60;
        if (stage === 7) return 80;
        if (stage === 8) return 100;
        if (stage === 9) return 0; // Hostage has black background, no tears overlay
        return 0;
    };

    const isHostage = stage === 9;
    const tearsHeight = getTearsHeight();

    // Background color
    // Default: light pink. Hostage: black.
    const bgColor = isHostage
        ? "bg-black"
        : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100 via-pink-200 to-pink-300";
    const textColor = isHostage ? "text-white" : "text-[#5a3e36]";

    if (isSuccess) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#ffe4e6] p-4 text-center relative overflow-hidden">
                <FloatingHearts />

                <AnimatePresence>
                    {!isLetterOpen ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="z-10 relative cursor-pointer group"
                            onClick={() => setIsLetterOpen(true)}
                        >
                            <div className="relative w-64 h-64 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/letter.png"
                                    alt="Love Letter"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <p className="text-3xl font-bold text-[#5a3e36] animate-pulse">
                                open it, dareng.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="fixed inset-0 flex items-center justify-center z-50 p-4"
                            onClick={() => {
                                setIsLetterOpen(false);
                                setIsSuccess(false);
                                setStage(0);
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
                            <div
                                className="relative w-full max-w-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Scattered Images */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50, rotate: -20 }}
                                    animate={{ opacity: 1, x: 0, rotate: -12 }}
                                    whileHover={{ scale: 1.2, rotate: 0, zIndex: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -top-32 -left-28 w-48 h-56 z-0 shadow-xl border-4 border-white bg-white p-1 cursor-pointer"
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image src="/dara2.png" alt="Memory 1" layout="fill" objectFit="cover" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50, rotate: 20 }}
                                    animate={{ opacity: 1, x: 0, rotate: 12 }}
                                    whileHover={{ scale: 1.2, rotate: 0, zIndex: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -top-32 -right-32 w-44 h-52 z-0 shadow-xl border-4 border-white bg-white p-1 cursor-pointer"
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image src="/dara3.png" alt="Memory 2" layout="fill" objectFit="cover" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                                    animate={{ opacity: 1, y: 0, rotate: -6 }}
                                    whileHover={{ scale: 1.2, rotate: 0, zIndex: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -bottom-32 -left-32 w-48 h-56 z-20 shadow-xl border-4 border-white bg-white p-1 cursor-pointer"
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image src="/dara4.png" alt="Memory 3" layout="fill" objectFit="cover" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                                    animate={{ opacity: 1, y: 0, rotate: 8 }}
                                    whileHover={{ scale: 1.2, rotate: 0, zIndex: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -bottom-36 -right-24 w-44 h-52 z-20 shadow-xl border-4 border-white bg-white p-1 cursor-pointer"
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image src="/dara5.png" alt="Memory 4" layout="fill" objectFit="cover" />
                                    </div>
                                </motion.div>

                                <div className="relative bg-[#fffbf0] w-full p-8 md:p-12 rounded-lg shadow-2xl transform rotate-1 border-2 border-[#e8dcc0] z-30">
                                    <h2 className="text-4xl font-bold text-[#5a3e36] mb-6 font-[family-name:var(--font-indie)]">
                                        hello my dear dara,
                                    </h2>
                                    <p className="text-xl text-[#5a3e36]/80 leading-relaxed font-[family-name:var(--font-indie)] whitespace-pre-line">
                                        I just want you to know how I’m grateful to be by your side and loving you. I’m so happy for all the memories we’ve made together – our little hangouts every week, eating delicious food, hiking and going on long rides, and many more moments that I cherish forever.  I hope we make more memories and enjoy even more experiences in the future. I’ll continue to do my best in loving you even more and I’m thankful for everything you’ve done for me.
                                    </p>
                                    <div className="mt-8 text-right text-2xl font-bold text-[#5a3e36] font-[family-name:var(--font-indie)]">
                                        I love you, dara.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        );
    }

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-center p-4 transition-colors duration-500 ${bgColor} relative overflow-hidden`}
        >
            {!isHostage && <FloatingHearts />}

            {/* Cat Image Background - Anchored to bottom */}
            {/* Tears Overlay */}
            <motion.div
                className="absolute bottom-0 left-0 w-full z-0 pointer-events-none flex flex-col justify-end"
                initial={{ height: "0%" }}
                animate={{ height: `${tearsHeight}%` }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full relative h-10 md:h-20 lg:h-32 -mb-1">
                    <svg
                        className="absolute bottom-0 w-full h-full fill-[#B9E4F4]"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 320"
                    >
                        <motion.path
                            id="wave"
                            fillOpacity="1"
                            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            animate={{
                                d: [
                                    "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",

                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        />
                    </svg>
                </div>
                <div className="w-full bg-[#B9E4F4] flex-grow" />
            </motion.div>

            {/* Cat Image Background - Anchored to bottom, now z-10 to sit ABOVE tears */}
            <motion.div
                key={stage}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="absolute bottom-0 w-full h-[70vh] z-10 flex justify-center items-end pl-40"
            >
                <div className="relative w-full h-full">
                    <Image
                        src={getCurrentImage()}
                        alt="Cat reaction"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom center"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content Overlay - z-20 to sit ABOVE cat */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-48 pointer-events-none">

                <h1 className={`text-6xl font-bold mb-8 ${textColor} drop-shadow-lg tracking-wide`}>
                    {isHostage
                        ? "are you really not gonna say yes?"
                        : "will you be my valentine?"}
                </h1>

                <div className="flex gap-8 pointer-events-auto">
                    <button
                        onClick={handleYes}
                        className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full text-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg border-b-4 border-green-700"
                    >
                        YES
                    </button>

                    {!isHostage && (
                        <button
                            onClick={handleNo}
                            className="px-8 py-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-bold rounded-full text-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg border-b-4 border-red-700"
                        >
                            NO
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
}
