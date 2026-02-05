'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Stats() {
    const { t } = useLanguage();

    const stats = [
        { label: t.stats.experience, value: 1, suffix: '+' },
        { label: t.stats.finished, value: 1 },
        { label: t.stats.ongoing, value: 2 },
        { label: t.stats.commits, value: 500, suffix: '+' },
    ];

    return (
        <section className="py-24 relative">
            {/* Glassmorphism Background for Stats Bar */}
            <div className="container mx-auto px-4">
                <ScrollAnimationWrapper>
                    <div className="glass-panel rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-white/5 relative z-10 overflow-hidden group hover:border-neon-cyan/30 transition-colors duration-500">

                        {/* Neon Glow effect on hover */}
                        <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}

function StatItem({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    // Format the display value (mostly for integer display)
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });

        return () => springValue.destroy(); // Clean up listener
    }, [springValue, suffix]);

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div
                ref={ref}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400"
            >
                0{suffix}
            </div>
            <p className="text-sm md:text-base text-neon-cyan/80 font-medium tracking-wider uppercase">
                {label}
            </p>
        </div>
    );
}
