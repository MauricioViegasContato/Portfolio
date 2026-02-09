import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import SecretTerminal from '@/components/ui/SecretTerminal';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mauri | Creative Developer',
  description: 'Portfolio of a creative developer specializing in interactive web experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-black text-white antialiased`}>
        <LanguageProvider>
          <SecretTerminal />
          <Header />
          <main className="relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
