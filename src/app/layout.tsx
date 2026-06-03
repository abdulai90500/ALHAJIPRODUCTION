import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alhaji Production Home | Empowering Communities in Sierra Leone',
  description:
    'Dedicated to youth empowerment, Clean Water Factory initiatives, Animal Rearing projects, and philanthropic development across West Africa.',
  keywords: [
    'Alhaji Production Home',
    'Alhaji Sesay',
    'Sierra Leone philanthropy',
    'clean water project',
    'animal rearing',
    'poultry cattle goat farming',
    'charity',
  ],
  authors: [{ name: 'Alhaji Sesay' }],
  openGraph: {
    title: 'Alhaji Production Home | Philanthropy & Sustainable Projects',
    description: 'Empowering communities through agriculture, clean water, and education in Sierra Leone.',
    url: 'https://alhajiproductionhome.com',
    siteName: 'Alhaji Production Home',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-surface text-dark min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
