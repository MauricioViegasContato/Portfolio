'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail } from 'lucide-react';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-neon-cyan/20 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[80px] rounded-full -z-10" />

                        {/* Content */}
                        <div className="space-y-8 text-center md:text-left">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">About Mauri</h2>
                                <p className="text-neon-cyan/80 font-mono text-sm tracking-wider">CREATIVE TECHNOLOGIST</p>
                            </div>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I&apos;m a developer who bridges the gap between functional code and artistic motion.
                                    My goal isn&apos;t just to build websites, but to create &quot;living&quot; digital ecosystems that react and breathe.
                                </p>
                                <p>
                                    Specializing in <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span>, and <span className="text-white font-medium">high-performance animations</span>, I turn static designs into immersive experiences.
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Core Stack</h3>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    {['Next.js 15', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'WebGL'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4 border-t border-white/10 flex items-center justify-center md:justify-start gap-6">
                                <SocialLink icon={<Github size={20} />} label="GitHub" href="#" />
                                <SocialLink icon={<Linkedin size={20} />} label="LinkedIn" href="#" />
                                <SocialLink icon={<Mail size={20} />} label="Email" href="#" />
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full mt-4 md:hidden py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium"
                            >
                                Close Biography
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function SocialLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
    return (
        <a href={href} className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors group">
            <span className="group-hover:scale-110 transition-transform">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}
