'use client';
import {useTranslations} from 'next-intl';

export default function ManagementOrganization() {
  const t = useTranslations('mo');

  const bullets = [
    'Net hedefler, net roller, net ritimler',
    'Kültür = Davranışların toplamı: ölç, öğret, ödüllendir',
    'İnovasyon için güvenli hatalar, hızlı öğrenme'
  ];

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">{t('heroTitle')}</h1>
        <p className="mt-3 text-lg opacity-80">{t('heroSubtitle')}</p>
        <a href="#playbook" className="inline-block mt-6 px-6 py-3 rounded bg-blue-600 text-white">
          {t('cta')}
        </a>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('sections.why')}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>

      <section className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{t('sections.styles')}</h2>
        <p>Transformasyonel, koçluk odaklı, ürün-odaklı liderlik yaklaşımlarını; ritim (OKR/Weekly), görünürlük panoları ve net geri bildirim yapılarıyla birleştirin.</p>
      </section>

      <section className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{t('sections.evolution')}</h2>
        <p>Hiyerarşik → çapraz işbirliği → ürün ekipleri → özgürleştirilmiş organizasyon. Her aşamada karar alma hızını ve sorumluluğu netleştirin.</p>
      </section>

      <section id="playbook" className="space-y-3 mt-10">
        <h2 className="text-2xl font-semibold">{t('sections.playbook')}</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Gün 1–7: Hedef/sonuç (OKR) belirleyin, ekip rollerini yazın.</li>
          <li>Gün 8–30: Haftalık ritim, görünürlük panosu, risk & karar günlüğü.</li>
          <li>Gün 31–60: Geri bildirim döngüleri, mikro-öğrenme ve mentorluk.</li>
          <li>Gün 61–90: Süreç sadeleştirme, yetkilendirme ve otomasyon.</li>
        </ol>
      </section>
    </main>
  );
}
