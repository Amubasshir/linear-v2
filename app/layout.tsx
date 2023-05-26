import { Inter } from 'next/font/google';
import { Container } from './components/Container';
import { Header } from './components/Header';
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
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)]">{children}</main>
          <footer>
            <Container>Footer</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
