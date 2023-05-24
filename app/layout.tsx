import { Inter } from 'next/font/google';
import './globals.css';
import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Linear',
  description: 'Linear homepage rebuild for education purpose.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head />
        {children}
      </body>
    </html>
  );
}
