'use client';
import {useEffect, useState} from 'react';

export default function ArchiveList() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/dijital-miras-hikayesis?populate=*`)
      .then(r => r.json())
      .then(d => setItems(d.data || []))
      .catch(() => setItems([]));
  }, []);
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dijital Miras Arşivi</h1>
      <ul className="space-y-2">
        {items.map((it: any) => (
          <li key={it.id} className="p-4 rounded border">
            <div className="font-semibold">{it.attributes?.title}</div>
            <div className="text-sm opacity-70">{it.attributes?.category}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
