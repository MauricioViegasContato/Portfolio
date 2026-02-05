'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.about, href: '/about' },
        { name: t.nav.work, href: '/work' },
        { name: t.nav.contact, href: '/contact' },
    ];

    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        sessionStorage.removeItem('hasSeenPreloader');
        window.location.href = '/';
    };

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenPreloader');
        const isHome = pathname === '/';

        if (hasSeen || !isHome) {
            setIsVisible(true);
        } else {
            // Sync with Preloader duration (9s) only on Home
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 9000);
            return () => clearTimeout(timer);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.header
                        className={cn(
                            "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
                            isScrolled ? "bg-neutral-900/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                        )}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="w-full px-6 md:px-12 flex items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="block" onClick={handleLogoClick}>
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={180}
                                    height={60}
                                    className="h-12 md:h-16 w-auto object-contain hover:opacity-80 transition-opacity"
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                <nav className="flex items-center gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    ))}
                                </nav>

                                {/* Language Switcher (Desktop) */}
                                <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                                    <button
                                        onClick={() => setLanguage('pt')}
                                        className={cn("text-2xl hover:scale-110 transition-transform", language === 'pt' ? "opacity-100 grayscale-0" : "opacity-50 grayscale")}
                                        title="Português"
                                    >
                                        🇧🇷
                                    </button>
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className={cn("text-2xl hover:scale-110 transition-transform", language === 'en' ? "opacity-100 grayscale-0" : "opacity-50 grayscale")}
                                        title="English"
                                    >
                                        🇺🇸
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex items-center gap-4 md:hidden">
                                {/* Language Switcher (Mobile Compact) */}
                                <button
                                    onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                                    className="text-2xl"
                                >
                                    {language === 'pt' ? '🇧🇷' : '🇺🇸'}
                                </button>

                                <button
                                    className="text-white p-2"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </motion.header>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                            >
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-3xl font-bold text-white hover:text-neon-cyan transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
}
