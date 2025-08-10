'use client';
import {useEffect, useMemo, useState} from 'react';
import {safeFetchJSON} from '../../../lib/safeFetch';
import LoadingGrid from '../../../components/ui/LoadingGrid';
import Empty from '../../../components/ui/Empty';
import {useDebounced} from '../../../lib/useDebounced';

type Item = {id:number; attributes?:{name?:string; description?:string}};

export default function Services() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(''); const qd = useDebounced(q, 300);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_CMS_URL ?? ''}/api/hizmets?populate=*`;
    setLoading(true);
    safeFetchJSON(url).then(d => setItems(Array.isArray(d?.data) ? d.data : [])).finally(()=>setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const qq = qd.trim().toLowerCase();
    return items.filter(it => {
      const n = it.attributes?.name?.toLowerCase() || '';
      const d = it.attributes?.description?.toLowerCase() || '';
      return !qq || n.includes(qq) || d.includes(qq);
    });
  }, [items, qd]);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">eCyPro Hizmetleri</h1>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ara..." className="border px-3 py-2 rounded"/>
      {loading ? <LoadingGrid/> : (
        filtered.length === 0 ? <Empty title="Hizmet yok" subtitle="Yakında burada listelenecek."/> : (
          <ul className="grid gap-4 md:grid-cols-2">
            {filtered.map(it => (
              <li key={it.id} className="border rounded p-4">
                <div className="font-semibold">{it.attributes?.name ?? 'Hizmet'}</div>
                <div className="text-sm opacity-80">{it.attributes?.description ?? ''}</div>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  );
}
