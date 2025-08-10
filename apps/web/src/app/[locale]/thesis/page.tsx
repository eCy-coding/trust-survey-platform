'use client';
import {useEffect, useMemo, useState} from 'react';
import {safeFetchJSON} from '../../../lib/safeFetch';
import LoadingGrid from '../../../components/ui/LoadingGrid';
import Empty from '../../../components/ui/Empty';
import {useDebounced} from '../../../lib/useDebounced';

type Item = {id:number; attributes?:{title?:string; subtitle?:string}};

export default function ThesisList() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(''); const qd = useDebounced(q, 300);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_CMS_URL ?? ''}/api/tez-makalesis?populate=*`;
    setLoading(true);
    safeFetchJSON(url).then(d => setItems(Array.isArray(d?.data) ? d.data : [])).finally(()=>setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const qq = qd.trim().toLowerCase();
    return items.filter(it => {
      const t = it.attributes?.title?.toLowerCase() || '';
      const s = it.attributes?.subtitle?.toLowerCase() || '';
      return !qq || t.includes(qq) || s.includes(qq);
    });
  }, [items, qd]);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Etik Değerler Tezi</h1>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ara..." className="border px-3 py-2 rounded"/>
      {loading ? <LoadingGrid/> : (
        filtered.length === 0 ? <Empty title="Kayıt yok" subtitle="İlk içeriği Strapi’den ekleyin."/> : (
          <ul className="space-y-2">
            {filtered.map(it => (
              <li key={it.id} className="p-4 rounded border">
                <div className="font-semibold">{it.attributes?.title ?? 'Başlık'}</div>
                <div className="text-sm opacity-70">{it.attributes?.subtitle ?? ''}</div>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  );
}
