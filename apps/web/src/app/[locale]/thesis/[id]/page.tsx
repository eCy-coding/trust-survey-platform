'use client';
import {useEffect, useState} from 'react';
import {safeFetchJSON} from '../../../../lib/safeFetch';

type Item = {id:number; attributes?:{title?:string; subtitle?:string}};

export default function ThesisDetail({params}:{params: Promise<{locale:string; id:string}>}) {
  const [item, setItem] = useState<Item|null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      const {id} = await params;
      const url = `${process.env.NEXT_PUBLIC_CMS_URL ?? ''}/api/tez-makalesis/${id}`;
      setLoading(true); setErr(null);
      safeFetchJSON(url)
        .then(d => setItem(d?.data ?? null))
        .catch(()=>setErr('Kayıt alınamadı'))
        .finally(()=>setLoading(false));
    })();
  }, [params]);

  if (loading) return <main className="p-8">Yükleniyor…</main>;
  if (err) return <main className="p-8 text-red-600">{err}</main>;
  if (!item) return <main className="p-8">Kayıt bulunamadı.</main>;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{item.attributes?.title}</h1>
      <p className="opacity-70 mt-2">{item.attributes?.subtitle}</p>
    </main>
  );
}
