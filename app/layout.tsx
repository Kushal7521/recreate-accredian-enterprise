import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Accredian Enterprise - Transform Your Workforce',
  description: 'Enterprise learning solutions designed for organizational growth and employee excellence.',
  keywords: 'enterprise learning, professional development, training programs, corporate education',
  openGraph: {
    title: 'Accredian Enterprise - Transform Your Workforce',
    description: 'Enterprise learning solutions designed for organizational growth and employee excellence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
