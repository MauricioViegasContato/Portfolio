'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Just in case lib/utils doesn't exist yet, I'll inline the class merger or wait. 
// Standard Next.js templates often don't have it unless shadcn is installed.
// I'll assume I need to create it or just use clsx/tailwind-merge inline for now to avoid errors, 
// OR I will create lib/utils.ts as well.

export default function ScrollAnimationWrapper({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
