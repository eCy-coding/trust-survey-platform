import Header from '../../components/Header';
import '../globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params; // Next 15 param Promise
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}];
}
