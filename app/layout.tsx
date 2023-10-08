import './globals.css';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Playfair_Display, Sofia_Sans } from 'next/font/google';
import ModalProvider from './providers/modal-provider';
import Navbar from '@/components/navbar';
import FormProvider from './providers/form-provider';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });
const sofia_sans = Sofia_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('overflow-x-hidden', sofia_sans.className)}>
        <ModalProvider />
        <Navbar />
        <FormProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
