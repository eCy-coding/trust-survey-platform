import type {Metadata} from 'next';
import Header from '../../components/Header';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Trust Survey Platform',
  description: 'Digital Knowledge & Heritage Platform',
  openGraph: {
    title: 'Trust Survey Platform',
    description: 'Digital Knowledge & Heritage Platform',
    url: 'http://localhost:3000',
    siteName: 'Trust Survey Platform',
    type: 'website'
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params; // Next 15
  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}];
}
