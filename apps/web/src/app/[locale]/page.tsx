'use client';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">{t('description')}</p>

      <div className="mt-8 flex gap-4">
        <a href="/en" className="underline">EN</a>
        <a href="/tr" className="underline">TR</a>
      </div>
    </main>
  );
}
