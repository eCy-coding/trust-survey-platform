'use client';
import {useEffect, useState} from 'react';

type Item = {id: number; attributes?: {title?: string; subtitle?: string}};

export default function ThesisList() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_CMS_URL ?? ''}/api/tez-makalesis?populate=*`;
    fetch(url)
      .then(r => r.ok ? r.json() : Promise.resolve({data: []}))
      .then(d => setItems(Array.isArray(d?.data) ? d.data : []))
      .catch(() => setItems([]));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Etik Değerler Tezi</h1>
      {items.length === 0 ? (
        <p>Henüz içerik yok. CMS bağlandığında liste burada görünecek.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.id} className="p-4 rounded border">
              <div className="font-semibold">{it.attributes?.title ?? 'Başlık'}</div>
              <div className="text-sm opacity-70">{it.attributes?.subtitle ?? ''}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
