export default async function ManagementOrganization({params}:{params: Promise<{locale:string}>}) {
  const {locale} = await params;
  const isTR = locale === 'tr';

  const copy = isTR ? {
    heroTitle: "Yönetim & Organizasyon: Üstün Başaran Takımlar Kurun",
    heroSubtitle: "Yapıdan kültüre: modern organizasyonlar için pratik bir oyun kitabı.",
    cta: "Oyun Kitabını Başlat",
    why: "Neden Yönetim & Organizasyon?",
    styles: "Bugün İşleyen Liderlik Stilleri",
    evolution: "Organizasyon Tasarımının Evrimi",
    playbook: "90 Günlük Dönüşüm Oyun Kitabı",
    bullets: [
      "Net hedefler, net roller, net ritimler",
      "Kültür = Davranışların toplamı: ölç, öğret, ödüllendir",
      "İnovasyon için güvenli hatalar, hızlı öğrenme"
    ],
    play: [
      "Gün 1–7: OKR belirleyin, ekip rollerini yazın.",
      "Gün 8–30: Haftalık ritim, görünürlük panosu, karar günlüğü.",
      "Gün 31–60: Geri bildirim döngüleri, mikro-öğrenme, mentorluk.",
      "Gün 61–90: Süreç sadeleştirme, yetkilendirme, otomasyon."
    ]
  } : {
    heroTitle: "Management & Organization: Build Teams That Outperform",
    heroSubtitle: "From structure to culture: a practical playbook for modern organizations.",
    cta: "Start the Playbook",
    why: "Why Management & Organization Matter",
    styles: "Leadership Styles That Work Today",
    evolution: "The Evolution of Organizational Design",
    playbook: "Your 90-Day Transformation Playbook",
    bullets: [
      "Clear goals, clear roles, clear cadences",
      "Culture = sum of behaviors: measure, coach, reward",
      "Safe-to-fail experiments for faster learning"
    ],
    play: [
      "Days 1–7: Define OKRs and write team roles.",
      "Days 8–30: Weekly rhythm, dashboards, decision log.",
      "Days 31–60: Feedback loops, micro-learning, mentoring.",
      "Days 61–90: Simplify processes, empower, automate."
    ]
  };

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">{copy.heroTitle}</h1>
        <p className="mt-3 text-lg opacity-80">{copy.heroSubtitle}</p>
        <a href="#playbook" className="inline-block mt-6 px-6 py-3 rounded bg-blue-600 text-white">
          {copy.cta}
        </a>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{copy.why}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {copy.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>

      <section className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{copy.styles}</h2>
        <p>Transformational / coaching-oriented / product-led leadership paired with OKRs, transparent dashboards, and tight feedback loops.</p>
      </section>

      <section className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{copy.evolution}</h2>
        <p>Hierarchical → cross-functional → product teams → empowered organizations. Clarify decision speed and accountability at each stage.</p>
      </section>

      <section id="playbook" className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{copy.playbook}</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {copy.play.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </section>
    </main>
  );
}
