'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Survey } from '@/types/survey';

export default function SurveysPage() {
  const [data,setData]=useState<Survey[]>([]);
  useEffect(()=>{ fetch('/api/surveys',{cache:'no-store'}).then(r=>r.json()).then(setData).catch(()=>setData([])); },[]);
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Anketler</h1>
        <Button asChild><Link href="/surveys/new">Yeni Anket</Link></Button>
      </div>
      <div className="grid gap-3">
        {data.length===0 && <div className="text-sm text-gray-500">Henüz kayıt yok. 'Yeni Anket' ile oluştur.</div>}
        {data.map(s=>(
          <Card key={s.id} className="p-4">
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-gray-500">{s.description}</div>
            <div className="text-xs text-gray-400 mt-1">{new Date(s.createdAt).toLocaleString()}</div>
          </Card>
        ))}
      </div>
    </main>
  );
}