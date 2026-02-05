'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

type Translations = {
    nav: {
        about: string;
        work: string;
        contact: string;
    };
    hero: {
        designer: string;
        coder: string;
        description: string;
    };
    stats: {
        experience: string;
        finished: string;
        ongoing: string;
        commits: string;
    };
    projects: {
        title: string;
        p1: { title: string; description: string; };
        p2: { title: string; description: string; };
        p3: { title: string; description: string; };
    };
};

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            about: 'About',
            work: 'Work',
            contact: 'Contact',
        },
        hero: {
            designer: 'designer.',
            coder: '<coder />',
            description: 'Front end developer who writes clean <br /> elegant and efficient code.',
        },
        stats: {
            experience: 'Years Experience',
            finished: 'Finished Projects',
            ongoing: 'Projects in Progress',
            commits: 'Commits',
        },
        projects: {
            title: 'Selected Work',
            p1: {
                title: 'MPK Parking Management',
                description: 'Comprehensive financial management app for parking businesses with daily reporting and Excel exports. Built with a scalable service-based architecture.'
            },
            p2: {
                title: 'Architecture & Client Sync',
                description: 'A dual-interface mobile platform for architects and clients. Features real-time construction tracking, financial dashboards, and a social-style portfolio feed.'
            },
            p3: {
                title: 'AI English Coach',
                description: 'Conversation training app featuring AI roleplay, pronunciation correction, and gamified progression (streaks, shop).'
            },
        },
    },
    pt: {
        nav: {
            about: 'Sobre',
            work: 'Projetos',
            contact: 'Contato',
        },
        hero: {
            designer: 'designer.',
            coder: '<coder />',
            description: 'Desenvolvedor Front-end que escreve  <br /> código limpo, elegante e eficiente.',
        },
        stats: {
            experience: 'Anos de Experiência',
            finished: 'Projetos Concluídos',
            ongoing: 'Projetos em Andamento',
            commits: 'Contribuições',
        },
        projects: {
            title: 'Trabalhos Selecionados',
            p1: {
                title: 'Gestão de Estacionamentos MPK',
                description: 'Aplicativo completo para gestão financeira de estacionamentos com relatórios diários e exportação Excel. Arquitetura modular e escalável.'
            },
            p2: {
                title: 'Gestão de Arquitetura & Obras',
                description: 'Plataforma mobile com interfaces para arquitetos e clientes. Inclui acompanhamento de obras em tempo real, financeiro, cronogramas e feed social.'
            },
            p3: {
                title: 'Coach de Inglês com IA',
                description: 'App de treino de conversação com roleplay via IA, correção de pronúncia e progressão gamificada (ofensivas, loja).'
            },
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
