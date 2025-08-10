import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
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
  const {locale} = await params; // Next 15: params Promise
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}];
}
