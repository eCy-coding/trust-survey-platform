'use client';
import {useEffect, useMemo, useState} from 'react';
import {safeFetchJSON} from '../../../lib/safeFetch';
import LoadingGrid from '../../../components/ui/LoadingGrid';
import Empty from '../../../components/ui/Empty';
import {useDebounced} from '../../../lib/useDebounced';

type Item = {id:number; attributes?:{title?:string; category?:string}};

export default function ArchiveList() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(''); const qd = useDebounced(q, 300);
  const [cat, setCat] = useState('');

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_CMS_URL ?? ''}/api/dijital-miras-hikayesis?populate=*`;
    setLoading(true);
    safeFetchJSON(url).then(d => setItems(Array.isArray(d?.data) ? d.data : [])).finally(()=>setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const qq = qd.trim().toLowerCase();
    return items.filter(it => {
      const t = it.attributes?.title?.toLowerCase() || '';
      const c = it.attributes?.category?.toLowerCase() || '';
      const okQ = !qq || t.includes(qq) || c.includes(qq);
      const okC = !cat || c === cat.toLowerCase();
      return okQ && okC;
    });
  }, [items, qd, cat]);

  const cats = Array.from(new Set(items.map(i => i.attributes?.category).filter(Boolean))) as string[];

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dijital Miras Arşivi</h1>

      <div className="flex flex-wrap gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ara..." className="border px-3 py-2 rounded"/>
        <select value={cat} onChange={e=>setCat(e.target.value)} className="border px-3 py-2 rounded">
          <option value="">Tüm Kategoriler</option>
          {cats.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading ? <LoadingGrid/> : (
        filtered.length === 0 ? <Empty title="Kayıt bulunamadı" subtitle="Filtreleri temizleyip tekrar deneyin."/> : (
          <ul className="grid gap-4 md:grid-cols-2">
            {filtered.map(it => (
              <li key={it.id} className="border rounded p-4">
                <div className="font-semibold">{it.attributes?.title ?? 'Başlık'}</div>
                <div className="text-sm opacity-70">{it.attributes?.category ?? ''}</div>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  );
}
