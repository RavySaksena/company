import type { Metadata } from 'next';
import Navbar from '../app/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechNova Solutions',
  description: 'Innovative Technology Solutions for a Better Future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head /> 
      {
        
      }
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}