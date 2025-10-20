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
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}