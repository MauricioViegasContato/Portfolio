'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectHeroProps {
    title: string;
    description: string;
    tags: string[];
    video?: string;
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectHero({ title, description, tags, video, image, githubUrl, liveUrl }: ProjectHeroProps) {
    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    />
                ) : image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-40"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 pt-20">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-wrap gap-3 mb-6">
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-neon-cyan text-sm font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        {title}
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex gap-4">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                            >
                                <Github size={20} /> View Code
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
