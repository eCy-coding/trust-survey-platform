import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '../../components/Header';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Trust Survey Platform',
  description: 'Digital Knowledge & Heritage Platform'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;          // Next 15: params bir Promise
  const messages = await getMessages();   // i18n/request.ts üzerinden gelir

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}];
}
