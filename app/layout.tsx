import type { Metadata } from 'next';
import './globals.css';

const SITE = 'https://imraaimmu.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Imrankhan Mohamed Hanifa — Senior Software Engineer',
  description:
    'Senior software engineer, 9+ years. Java, Spring Boot, Kafka, AWS. Architect of a published multi-tenant SaaS platform.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
    title: 'Imrankhan Mohamed Hanifa — Senior Software Engineer',
    description:
      'Nine years across retail, supply chain, payments, investment banking and healthcare. Event-driven Java services, Kafka pipelines and AWS platforms.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
