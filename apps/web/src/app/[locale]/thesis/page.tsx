'use client';
import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ThesisList() {
  const t = useTranslations('navigation');
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/tez-makalesis?populate=*`)
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .catch(() => setItems([]));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Etik Değerler Tezi</h1>
      <ul className="space-y-2">
        {items.map((it: any) => (
          <li key={it.id} className="p-4 rounded border">
            <div className="font-semibold">{it.attributes?.title}</div>
            <div className="text-sm opacity-70">{it.attributes?.subtitle}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
