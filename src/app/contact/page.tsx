'use client';

import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen pt-32 px-6 md:px-20 bg-black text-white flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {t.contact.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                {/* Contact Info */}
                <div className="space-y-8 bg-neutral-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-neon-cyan/10 rounded-full text-neon-cyan">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400">{t.contact.email}</h3>
                            <p className="text-lg font-medium">contato.mauricioviegas@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-neon-cyan/10 rounded-full text-neon-cyan">
                            <Smartphone size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400">{t.contact.phone}</h3>
                            <p className="text-lg font-medium">+55 (61) 98205-2194</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-neon-cyan/10 rounded-full text-neon-cyan">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400">{t.contact.linkedin}</h3>
                            <a href="#" className="text-lg font-medium hover:text-neon-cyan transition-colors">linkedin.com/in/mauricioviegas</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-neon-cyan/10 rounded-full text-neon-cyan">
                            <Github size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400">{t.contact.github}</h3>
                            <a href="#" className="text-lg font-medium hover:text-neon-cyan transition-colors">github.com/MauricioViegasContato</a>
                        </div>
                    </div>
                </div>

                {/* Message Placeholder */}
                <div className="flex flex-col justify-center items-start space-y-4">
                    <h2 className="text-2xl font-bold">{t.contact.cta_title}</h2>
                    <p className="text-gray-400">
                        {t.contact.cta_desc}
                    </p>
                    <a href="https://wa.me/5561982052194" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full md:w-auto bg-green-500 text-white hover:bg-green-600 mt-4 font-bold">
                            {t.contact.cta_button} (WhatsApp)
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    );
}
