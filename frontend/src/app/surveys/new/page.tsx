'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import QuestionEditor from '@/components/builder/QuestionEditor';
import type { Question } from '@/types/survey';

export default function NewSurveyPage(){
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [questions,setQuestions]=useState<Question[]>([]);

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    const payload = { title, description, questions };
    const res = await fetch('/api/surveys', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    if(res.ok){ alert('Anket kaydedildi'); window.location.href='/surveys'; }
    else { const t=await res.text(); alert('Hata: '+t); }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Yeni Anket</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm">Başlık</label>
            <Input value={title} onChange={e=>setTitle(e.target.value)} required/>
          </div>
          <div className="space-y-1">
            <label className="text-sm">Açıklama</label>
            <Input value={description} onChange={e=>setDescription(e.target.value)}/>
          </div>
        </div>
        <QuestionEditor onChange={setQuestions}/>
        <Button type="submit">Kaydet</Button>
      </form>
    </main>
  );
}