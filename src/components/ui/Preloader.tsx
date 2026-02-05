'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check session storage to see if we've already played the intro
        const hasSeen = sessionStorage.getItem('hasSeenPreloader');
        if (hasSeen) {
            setLoading(false);
            return;
        }

        // Check language persistence or other init logic here if needed

    }, []);

    useEffect(() => {
        if (!loading) return;

        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Fallback: If video doesn't end (or fails), dismiss after 9 seconds
        const timer = setTimeout(() => {
            handleComplete();
        }, 9000);

        return () => {
            document.body.style.overflow = 'unset';
            clearTimeout(timer);
        };
    }, [loading]);

    const handleComplete = () => {
        setLoading(false);
        sessionStorage.setItem('hasSeenPreloader', 'true');
    };

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full"
                    >
                        <video
                            src="/LogoMP4.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleComplete}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
