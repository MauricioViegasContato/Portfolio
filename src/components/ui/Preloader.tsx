'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [loading]);

    useEffect(() => {
        // Fallback: If video doesn't end (or fails), dismiss after 9 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 9000);
        return () => clearTimeout(timer);
    }, []);

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
                            onEnded={() => setLoading(false)}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
