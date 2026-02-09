'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

export default function SecretTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>(['> Welcome to the secret console.', '> Type "help" for commands.']);

    // Konami Code Sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const [keySequence, setKeySequence] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const { key } = e;

            // Check Konami Code
            setKeySequence(prev => {
                const updated = [...prev, key].slice(-10);
                if (JSON.stringify(updated) === JSON.stringify(konamiCode)) {
                    setIsOpen(true);
                    setHistory(h => [...h, '> SYSTEM HACKED. ACCESS GRANTED.']);
                    return [];
                }
                return updated;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        let response = '';

        switch (cmd) {
            case 'help':
                response = 'Available commands: whoami, contact, skills, hire, clear, exit';
                break;
            case 'whoami':
                response = 'Visitor User (Guest). Access Level: Restricted.';
                break;
            case 'contact':
                response = 'Email: mauricio.viegas.contato@gmail.com | GitHub: @MauricioViegasContato';
                break;
            case 'skills':
                response = 'Java, Flutter, Next.js, Supabase, Firebase, AI Integration.';
                break;
            case 'hire':
                window.open('mailto:mauricio.viegas.contato@gmail.com?subject=I found the secret terminal!', '_blank');
                response = 'Opening default mail client...';
                break;
            case 'clear':
                setHistory(['> Console cleared.']);
                setInput('');
                return;
            case 'exit':
                setIsOpen(false);
                setInput('');
                return;
            default:
                response = `Command not found: ${cmd}. Type "help" for assistance.`;
        }

        setHistory(prev => [...prev, `> ${input}`, `  ${response}`]);
        setInput('');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            >
                <div className="w-full max-w-2xl bg-black border border-green-500/50 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.2)] overflow-hidden font-mono text-green-500">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/30 bg-green-500/10">
                        <div className="flex items-center gap-2">
                            <Terminal size={16} />
                            <span className="text-sm font-bold">ADMIN TERMINAL</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-green-300">
                            <X size={16} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-4 h-[400px] overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-green-500/30">
                        {history.map((line, i) => (
                            <div key={i} className="whitespace-pre-wrap">{line}</div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleCommand} className="flex gap-2 p-4 border-t border-green-500/30 bg-black">
                        <span>$</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-green-500 placeholder-green-500/50"
                            placeholder="Type a command..."
                            autoFocus
                        />
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
