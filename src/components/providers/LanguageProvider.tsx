'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

type Translations = {
    nav: {
        home: string;
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
    about: {
        title: string;
        story: string;
        traits: string;
        goal: string;
        cta: string;
    };
    contact: {
        title: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
        cta_title: string;
        cta_desc: string;
        cta_button: string;
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
            home: 'Home',
            about: 'About',
            work: 'Work',
            contact: 'Contact',
        },
        hero: {
            designer: 'designer.',
            coder: '<coder />',
            description: 'Java Backend Developer building robust systems <br /> & Motion Designer creating visual impact.',
        },
        stats: {
            experience: 'Years Experience',
            finished: 'Finished Projects',
            ongoing: 'Projects in Progress',
            commits: 'Commits',
        },
        about: {
            title: 'About Me',
            story: "I'm Mauricio Viégas, a Computer Science student and former IT Soldier at the Brazilian Air Force (FAB). My background in military discipline combined with my passion for creative coding allows me to build systems that are both robust and visually striking. I started programming to create my own worlds, and today I turn that curiosity into professional software.",
            traits: 'Discipline, adaptability, and problem-solving are in my DNA. From assembling hardware to architecting cloud-integrated apps with Dart and Flutter, I handle the full spectrum of technology. I speak Intermediate French and Intermediate English.',
            goal: 'My goal is to specialize in Backend Development (Java Spring) while leveraging my Motion Design skills to understand the complete user experience.',
            cta: "Download CV"
        },
        contact: {
            title: 'Get In Touch',
            email: 'Email',
            phone: 'Phone',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            cta_title: "Let's build something amazing together.",
            cta_desc: "I'm currently available for freelance projects and full-time opportunities.",
            cta_button: "Send me a message"
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
            home: 'Início',
            about: 'Sobre',
            work: 'Projetos',
            contact: 'Contato',
        },
        hero: {
            designer: 'designer.',
            coder: '<coder />',
            description: 'Desenvolvedor Java Backend construindo sistemas robustos <br /> & Motion Designer criando impacto visual.',
        },
        stats: {
            experience: 'Anos de Experiência',
            finished: 'Projetos Concluídos',
            ongoing: 'Projetos em Andamento',
            commits: 'Contribuições',
        },
        about: {
            title: 'Sobre Mim',
            story: "Sou Mauricio Viégas, estudante de Ciência da Computação e ex-soldado em TI da Força Aérea Brasileira (FAB). Minha formação militar me trouxe disciplina e resiliência, que hoje aplico no desenvolvimento de software. Comecei na programação para criar meus próprios projetos e hoje transformo essa curiosidade em soluções profissionais.",
            traits: 'Disciplina, adaptabilidade e resolução de problemas estão no meu DNA. Da montagem de hardware à arquitetura de apps integrados com Dart e Flutter, domino o espectro completo da tecnologia. Falo francês intermediário e inglês intermediário.',
            goal: 'Meu foco é o Desenvolvimento Backend (Java Spring), mas uso minha bagagem em Motion Design para garantir que a experiência final seja impecável.',
            cta: "Baixar Currículo"
        },
        contact: {
            title: 'Vamos Conversar',
            email: 'E-mail',
            phone: 'Telefone',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            cta_title: "Vamos construir algo incrível juntos.",
            cta_desc: "Estou disponível para projetos freelance e oportunidades em tempo integral.",
            cta_button: "Me envie uma mensagem"
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
