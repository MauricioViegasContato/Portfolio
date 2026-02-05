'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import AboutModal from '@/components/ui/AboutModal';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useLanguage();

    // Raw mouse position (0 to 1)
    const x = useMotionValue(0.5);

    // Smooth physics-based value
    const mouseXParam = useSpring(x, {
        stiffness: 200,
        damping: 30,
        mass: 0.5
    });

    // Transform mouse position to panel widths
    // Mouse at 0 (Left) -> Left Panel 100%, Right Panel 0%
    // Mouse at 1 (Right) -> Left Panel 0%, Right Panel 100%
    const leftWidth = useTransform(mouseXParam, [0, 1], ["100%", "0%"]);
    const rightWidth = useTransform(mouseXParam, [0, 1], ["0%", "100%"]);

    // Blur/Opacity effects based on width
    // When a panel is small (near 0%), content should fade
    const leftContentOpacity = useTransform(mouseXParam, [0.4, 0.9], [1, 0]);
    const rightContentOpacity = useTransform(mouseXParam, [0.1, 0.6], [0, 1]);

    const leftBlur = useTransform(mouseXParam, [0.4, 0.9], ["0px", "10px"]);
    const rightBlur = useTransform(mouseXParam, [0.1, 0.6], ["10px", "0px"]);

    // Parallax effect for decorations (opposite to mouse)
    const parallaxX = useTransform(mouseXParam, [0, 1], ["50px", "-50px"]);
    // Subtle Parallax for Character (foreground/midground layer)
    const charParallaxX = useTransform(mouseXParam, [0, 1], ["80px", "-80px"]);

    // Static Offsets for Centering Images (Edit these to move characters)
    const designerOffset = -7; // Positive = Right, Negative = Left
    const coderOffset = 7;    // Positive = Right, Negative = Left

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX } = e;
        const { innerWidth } = window;
        // Calculate percentage
        const percent = clientX / innerWidth;
        x.set(percent);
    };

    const handleMouseLeave = () => {
        // Reset to center
        x.set(0.5);
    };

    return (
        <section
            className="h-[60vh] min-h-[500px] w-full flex relative overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* LEFT PANEL: DESIGNER */}
            <motion.div
                className="relative h-full overflow-hidden will-change-transform"
                style={{ width: leftWidth }}
            >
                {/* Base Background (Fundo) - Locked to Viewport w/ absolute positioning */}
                {/* Base Background (Fundo) - Locked to Viewport w/ absolute positioning */}
                <div
                    className="absolute top-0 left-0 w-screen h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/Fundo.png')" }}
                />

                {/* Character Image (Designer) - Centered & Fixed Scale */}
                <motion.div
                    className="absolute bottom-0 left-0 w-screen h-full bg-no-repeat z-20"
                    style={{
                        backgroundImage: "url('/Boneco-design.png')",
                        backgroundSize: 'auto 100%',
                        backgroundPosition: 'center bottom',
                        transform: 'scale(1.05)',
                        x: useTransform(charParallaxX, (val) => `calc(${val} + ${designerOffset}px)`)
                    }}
                />

                {/* Decorative Background Design Elements */}
                <motion.div
                    className="absolute top-0 left-0 w-screen h-full z-10 flex flex-col items-end justify-end pb-32 md:pb-32 pr-10 md:pr-20 font-mono pointer-events-none select-none opacity-50"
                    style={{
                        opacity: leftContentOpacity,
                        filter: useTransform(leftBlur, (v) => `blur(${v})`),
                        x: parallaxX
                    }}
                >
                    <div className="text-4xl font-bold absolute bottom-[30%] left-[34%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text text-right">Ps Ai Id</div>
                    <div className="text-sm absolute bottom-[25%] left-[33%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">FIGMA</div>
                    <div className="text-xs absolute bottom-[21%] left-[36%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">#FF0055</div>
                    <div className="text-base absolute bottom-[17%] left-[30%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">Vector</div>
                    <div className="text-xs absolute bottom-[12%] left-[38%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">CMYK / RGB</div>
                    <div className="text-5xl font-bold absolute bottom-[1%] left-[30%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text text-right">UX/UI</div>
                </motion.div>




            </motion.div>

            {/* RIGHT PANEL: CODER */}
            <motion.div
                className="relative h-full overflow-hidden will-change-transform"
                style={{ width: rightWidth }}
            >
                {/* Base Background (Fundo) - Locked to Viewport (Align Right) */}
                {/* Base Background (Fundo) - Locked to Viewport (Align Right) */}
                <div
                    className="absolute top-0 right-0 w-screen h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/Fundo.png')" }}
                />

                {/* Character Image (Coder) - Centered & Fixed Scale */}
                <motion.div
                    className="absolute bottom-0 right-0 w-screen h-full bg-no-repeat z-20"
                    style={{
                        backgroundImage: "url('/Boneco-coder.png')",
                        backgroundSize: 'auto 100%',
                        backgroundPosition: 'center bottom',
                        transform: 'scale(1.05)',
                        x: useTransform(charParallaxX, (val) => `calc(${val} + ${coderOffset}px)`)
                    }}
                />



                {/* Decorative Background Code Snippets */}
                <motion.div
                    className="absolute top-0 right-0 w-screen h-full z-10 flex flex-col items-end justify-end pb-32 md:pb-32 pr-10 md:pr-20 font-mono text-neon-cyan/50 pointer-events-none select-none opacity-50"
                    style={{
                        opacity: rightContentOpacity,
                        filter: useTransform(rightBlur, (v) => `blur(${v})`),
                        x: parallaxX
                    }}
                >
                    {/* Existing Right-Side items - Moved to shoulder/chest area */}
                    <div className="text-4xl font-bold opacity-60 absolute bottom-[40%] right-[31%] text-left">CSS3 HTML5</div>
                    <div className="text-sm absolute bottom-[36%] right-[38%] opacity-60">&lt;html&gt;</div>
                    <div className="text-xs absolute bottom-[33%] right-[31%] opacity-60">{'{ height: 100%; }'}</div>
                    <div className="text-base absolute bottom-[28%] right-[32%] opacity-60">&lt;div class="creative"&gt;</div>
                    <div className="text-xs absolute bottom-[25%] right-[29%] opacity-60">color: #00f0ff;</div>
                    <div className="text-5xl font-bold opacity-60 absolute bottom-[9%] right-[35%] text-left">REACT</div>

                    {/* NEW: Shoulder/Center items - Interleaved */}
                    <div className="text-sm absolute bottom-[7%] right-[30%] opacity-60">const dev = true;</div>
                    <div className="text-xs absolute bottom-[5%] right-[32%] opacity-60">console.log("Hello");</div>
                    <div className="text-lg absolute bottom-[3%] right-[30%] opacity-60">{"=>"}</div>
                    <div className="text-xs absolute bottom-[1%] right-[33%] opacity-60">npm run dev</div>
                </motion.div>


            </motion.div>

            {/* MODAL (Triggered elsewhere or removed trigger for now as per request) */}
            <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* --- OVERLAY TEXT CONTENT (Unclipped) --- */}

            {/* LEFT TEXT */}
            <motion.div
                className="absolute top-0 left-0 w-screen h-full z-30 pointer-events-none"
                style={{
                    opacity: leftContentOpacity,
                    filter: useTransform(leftBlur, (v) => `blur(${v})`)
                }}
            >
                <h2 className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 text-6xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                    {t.hero.designer}
                </h2>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
                className="absolute top-0 right-0 w-screen h-full z-30 pointer-events-none"
                style={{
                    opacity: rightContentOpacity,
                    filter: useTransform(rightBlur, (v) => `blur(${v})`)
                }}
            >
                <div className="absolute top-1/2 right-[25%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-4">
                    <h2
                        className="text-6xl md:text-6xl font-bold text-white"
                    >
                        {t.hero.coder}
                    </h2>
                    <p
                        className="mt-4 text-base md:text-xl text-gray-300 font-light max-w-lg text-left whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: t.hero.description }}
                    />
                </div>
            </motion.div>

        </section>
    );
}
