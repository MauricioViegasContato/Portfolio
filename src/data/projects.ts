export const projectsData: Record<string, any> = {
    'mpk': {
        en: {
            title: 'MPK Parking System',
            description: 'A comprehensive financial and operational management system for a parking franchise network, built to scalable standards.',
            tags: ['Flutter', 'Supabase', 'Dart', 'Clean Architecture'],
            challenge: `The client needed a centralized system to manage financial entries across multiple parking lots in real-time.
            
            The main challenge was to ensure offline-first capability for operators in basements with poor connectivity, while guaranteeing data synchronization with the head office dashboard without conflicts.`,
            solution: `I architected a Flutter mobile application with a robust local database (Isar/Hive) that syncs with Supabase when online.
            
            Using Clean Architecture, I decoupled the UI from the logic, allowing for easy white-labeling of the app for different franchises. Authorization policies (RLS) in Supabase ensure store managers only see their own data, while admins have a global view.`,
            features: [
                'Offline-first Entry Management',
                'Real-time Dashboard for Admins',
                'Automated Excel Reports Generation',
                'Role-Based Access Control (RBAC)'
            ],
            role: 'Lead Developer & Architect',
            timeline: '3 Weeks'
        },
        pt: {
            title: 'Sistema de Franquias MPK',
            description: 'Um sistema completo de gestão financeira e operacional para uma rede de estacionamentos, construído com padrões de escalabilidade.',
            tags: ['Flutter', 'Supabase', 'Dart', 'Clean Architecture'],
            challenge: `O cliente precisava de um sistema centralizado para gerenciar entradas financeiras de múltiplos estacionamentos em tempo real.
            
            O maior desafio foi garantir funcionamento offline-first para operadores em subsolos sem sinal, garantindo sincronização sem conflitos com o dashboard da matriz assim que conectassem.`,
            solution: `Arquitetei uma aplicação Flutter com banco de dados local robusto (Isar/Hive) que sincroniza com o Supabase.
            
            Usando Clean Architecture, desacoplei a UI da lógica, facilitando o "white-label" para diferentes franquias. As políticas de autorização (RLS) no Supabase garantem que gerentes vejam apenas sua loja, enquanto a diretoria tem visão global.`,
            features: [
                'Gestão de Entradas Offline-first',
                'Dashboard em Tempo Real',
                'Geração Automática de Relatórios Excel',
                'Controle de Acesso por Função (RBAC)'
            ],
            role: 'Desenvolvedor Líder & Arquiteto',
            timeline: '3 Semanas'
        },
        common: {
            video: '/MPK.mp4',
            githubUrl: 'https://github.com/MauricioViegasContato/MPK-Template',
            techStack: [
                { name: 'Flutter' }, { name: 'Supabase' }, { name: 'PostgreSQL' },
                { name: 'Riverpod' }, { name: 'Clean Arch' }
            ]
        }
    },
    'jolo': {
        en: {
            title: 'Jolo Architecture',
            description: 'A client-architect communication platform streamlining project updates, financial tracking, and design approvals.',
            tags: ['Flutter', 'Firebase', 'Provider'],
            challenge: `Architects often struggle with fragmented communication using WhatsApp, Email, and Drive links. Clients feel lost regarding project status.
            
            The goal was to create a "Single Source of Truth" app where clients could view 3D renders, approve budget items, and follow the construction timeline in one place.`,
            solution: `Developed a sleek, design-first mobile app using Flutter and Firebase. 
            
            Firestore provides real-time updates on construction progress. I implemented a custom "Feed" system where architects post updates (photos/videos) that clients can react to, similar to a private social network. Cloud Functions handle notifications for new approvals needed.`,
            features: [
                'Interactive Timeline Feed',
                'Budget Approval System',
                'Push Notifications',
                'Modern/Minimalist UI'
            ],
            role: 'Full-stack Mobile Developer',
            timeline: '4 Weeks'
        },
        pt: {
            title: 'Jolo Arquitetura Afetiva',
            description: 'Plataforma de comunicação entre arquiteto e cliente, centralizando atualizações de obra, financeiro e aprovações de design.',
            tags: ['Flutter', 'Firebase', 'Provider'],
            challenge: `Arquitetos sofrem com comunicação fragmentada (WhatsApp, Email, Drive). Clientes se sentem perdidos sobre o status da obra.
            
            O objetivo foi criar uma "Fonte Única da Verdade" onde clientes pudessem ver renders 3D, aprovar orçamentos e acompanhar o cronograma em um só lugar.`,
            solution: `Desenvolvi um app mobile com foco em design ("Pixel Perfect") usando Flutter e Firebase.
            
            O Firestore fornece atualizações em tempo real. Implementei um "Feed" personalizado onde arquitetos postam fotos/vídeos e clientes reagem, como uma rede social privada. Cloud Functions gerenciam as notificações de novas aprovações pendentes.`,
            features: [
                'Feed de Linha do Tempo Interativo',
                'Sistema de Aprovação de Orçamentos',
                'Notificações Push',
                'Interface Minimalista e Moderna'
            ],
            role: 'Desenvolvedor Full-stack Mobile',
            timeline: '4 Semanas'
        },
        common: {
            video: '/Jolo.mp4',
            githubUrl: 'https://github.com/MauricioViegasContato/Jolo-Template',
            techStack: [
                { name: 'Flutter' }, { name: 'Firebase Auth' }, { name: 'Firestore' },
                { name: 'Cloud Functions' }
            ]
        }
    },
    'fluentia': {
        en: {
            title: 'FluentIA - AI English Coach',
            description: 'An AI-powered English learning assistant that adapts to user scenarios, offering roleplay and strict correction modes.',
            tags: ['Flutter', 'OpenAI', 'Python', 'Speech API'],
            challenge: `Language learners often lack confidence to speak in real-world scenarios due to fear of judgement. Existing apps are either too gamified (Duolingo) or too expensive (Live Tutors).
            
            The challenge was to build a system that could "hear", "understand context", and "reply" with a specific personality (e.g., a rude waiter or a helpful teacher) in real-time.`,
            solution: `I created a hybrid system: A Flutter frontend handling Speech-to-Text (STT) and Text-to-Speech (TTS), communicating with a Python Backend acting as the "Brain".
            
            The Python backend uses OpenAI's API with sophisticated prompt engineering to enforce the "Persona" (Strict Teacher vs. Chill Friend). The app maintains conversation history to provide context-aware corrections.`,
            features: [
                'Real-time Voice Conversation',
                'Scenario Selection (Restaurant, Airport...)',
                'Grammar Correction Feedback Loop',
                'Dynamic Persona Switching'
            ],
            role: 'AI Engineer & Frontend Dev',
            timeline: '2 Weeks'
        },
        pt: {
            title: 'FluentIA - Coach de Inglês com IA',
            description: 'Assistente de aprendizado de inglês com IA que se adapta a cenários, oferecendo roleplay e modos de correção rigorosa.',
            tags: ['Flutter', 'OpenAI', 'Python', 'Speech API'],
            challenge: `Estudantes de idiomas travam na hora de falar por medo de julgamento. Apps existentes são muito "jogos" (Duolingo) ou muito caros (Professores Particulares).
            
            O desafio foi criar um sistema que pudesse "ouvir", "entender o contexto" e "responder" incorporando uma personalidade específica (ex: garçom mal-educado ou professor prestativo) em tempo real.`,
            solution: `Criei um sistema híbrido: Frontend Flutter lidando com Fala-para-Texto (STT) e Texto-para-Fala (TTS), comunicando com um Backend Python que age como o "Cérebro".
            
            O Python usa a API da OpenAI com engenharia de prompt avançada para manter a "Persona". O app mantém histórico da conversa para dar correções contextuais de gramática.`,
            features: [
                'Conversação por Voz em Tempo Real',
                'Seleção de Cenários (Restaurante, Aeroporto...)',
                'Loop de Feedback e Correção Gramatical',
                'Troca Dinâmica de Personas'
            ],
            role: 'Engenheiro de IA & Dev Frontend',
            timeline: '2 Semanas'
        },
        common: {
            // video: '/FluentIA.mp4',
            image: '/coming-soon.png',
            githubUrl: 'https://github.com/MauricioViegasContato/FluentIA-Template',
            techStack: [
                { name: 'Flutter' }, { name: 'Python (Flask)' }, { name: 'OpenAI API' },
                { name: 'Google Speech API' }
            ]
        }
    }
};

