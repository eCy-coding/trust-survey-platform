export default async function Home({params}:{params: Promise<{locale:string}>}) {
  const {locale} = await params;
  const isTR = locale === 'tr';
  const t = isTR
    ? {
        title: 'Dijital Bilgi ve Miras Platformu',
        desc: 'Bilgeliği koruyun, bilgiyi düzenleyin ve toplulukları güçlendirin.',
        cta: 'Hemen Başla',
        cards: [
          {h:'Yönetim & Organizasyon', p:'Takımlarınızı net hedefler ve ritimler ile uçurun.', href:'/management-organization'},
          {h:'Tez & Çalışmalar', p:'Etik değerler tezini keşfedin ve paylaşın.', href:'/thesis'},
          {h:'Arşiv & Hizmetler', p:'Dijital mirası koruyun, hizmetleri yönetin.', href:'/services'}
        ]
      }
    : {
        title: 'Digital Knowledge & Heritage Platform',
        desc: 'Preserve wisdom, organize knowledge, and empower communities.',
        cta: 'Get Started',
        cards: [
          {h:'Management & Organization', p:'Boost teams with clear goals and cadences.', href:'/management-organization'},
          {h:'Thesis & Studies', p:'Explore and share the ethics thesis.', href:'/thesis'},
          {h:'Archive & Services', p:'Protect digital heritage, manage services.', href:'/services'}
        ]
      };

  const base = isTR ? '/tr' : '/en';

  return (
    <main className="min-h-[70vh]">
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.title}</h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">{t.desc}</p>
        <a
          href={`${base}/management-organization`}
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:opacity-90"
        >
          {t.cta}
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3 pb-16">
        {t.cards.map((c) => (
          <a key={c.h} href={`${base}${c.href}`} className="rounded-2xl border p-6 hover:shadow-md transition">
            <div className="text-xl font-semibold">{c.h}</div>
            <p className="mt-2 opacity-80">{c.p}</p>
            <div className="mt-4 text-blue-600">→</div>
          </a>
        ))}
      </section>
    </main>
  );
}
