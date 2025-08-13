'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Question, QuestionType } from '@/types/survey';

type Props = { onChange(questions: Question[]): void };

function newId(){ return Math.random().toString(36).slice(2); }

export default function QuestionEditor({ onChange }: Props){
  const [items,setItems] = useState<Question[]>([]);

  function push(q: Question){
    const next = [...items, q];
    setItems(next); onChange(next);
  }
  function remove(id: string){
    const next = items.filter(i=>i.id!==id);
    setItems(next); onChange(next);
  }

  // form state
  const [type,setType]=useState<QuestionType>('short_text');
  const [text,setText]=useState('');
  const [opts,setOpts]=useState('Evet;Hayır');
  const [scale,setScale]=useState(5);

  function add(){
    if(!text.trim()) return;
    const base = { id:newId(), type, text } as Question;
    if(type==='multiple_choice') base.options = opts.split(';').map(s=>s.trim()).filter(Boolean);
    if(type==='likert') base.scale = Number(scale)||5;
    push(base);
    setText('');
  }

  return (
    <section className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="space-y-1 md:col-span-1">
          <label className="text-sm">Soru tipi</label>
          <select className="border rounded h-10 px-3" value={type} onChange={e=>setType(e.target.value as QuestionType)}>
            <option value="short_text">Kısa Metin</option>
            <option value="multiple_choice">Çoktan Seçmeli</option>
            <option value="likert">Likert (1..N)</option>
          </select>
        </div>
        <div className="space-y-1 md:col-span-2">
          <label className="text-sm">Soru metni</label>
          <Input value={text} onChange={e=>setText(e.target.value)} placeholder="Örn: Bu hizmete güveniniz nedir?" />
        </div>
        {type==='multiple_choice' && (
          <div className="space-y-1 md:col-span-3">
            <label className="text-sm">Seçenekler (;) ile ayır</label>
            <Input value={opts} onChange={e=>setOpts(e.target.value)} placeholder="Evet;Hayır;Kararsızım" />
          </div>
        )}
        {type==='likert' && (
          <div className="space-y-1 md:col-span-3">
            <label className="text-sm">Skala</label>
            <Input type="number" min={3} max={10} value={scale} onChange={e=>setScale(Number(e.target.value))} />
          </div>
        )}
      </div>
      <Button type="button" onClick={add}>Soru Ekle</Button>

      <div className="space-y-2">
        <h3 className="font-medium">Sorular</h3>
        {items.length===0 && <div className="text-sm text-gray-500">Henüz soru yok.</div>}
        <ul className="space-y-2">
          {items.map((q,idx)=>(
            <li key={q.id} className="border rounded p-3 flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-gray-500">#{idx+1}  {q.type}</div>
                <div className="font-medium">{q.text}</div>
                {q.type==='multiple_choice' && <div className="text-sm">Seçenekler: {q.options?.join(', ')}</div>}
                {q.type==='likert' && <div className="text-sm">Skala: 1..{q.scale}</div>}
              </div>
              <Button variant="secondary" onClick={()=>remove(q.id)}>Sil</Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}