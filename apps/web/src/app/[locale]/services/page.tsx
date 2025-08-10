'use client';
import {useEffect, useState} from 'react';

export default function Services() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/hizmets?populate=*`)
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .catch(() => setItems([]));
  }, []);
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">eCyPro Hizmetleri</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((it: any) => (
          <li key={it.id} className="p-4 rounded border">
            <div className="font-semibold">{it.attributes?.name}</div>
            <p className="text-sm opacity-80">{it.attributes?.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
