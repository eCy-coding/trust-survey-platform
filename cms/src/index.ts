export default {
  register(/* { strapi } */) {},
  async bootstrap({ strapi }: { strapi: any }) {
    // Tez/Makale seed
    const tezCount = await strapi.entityService.count('api::tez-makalesi.tez-makalesi', {});
    if (tezCount === 0) {
      await strapi.entityService.create('api::tez-makalesi.tez-makalesi', {
        data: { title: 'Etik Değerler Tezi #1', subtitle: 'Toplumsal güvenin temelleri' },
      });
      await strapi.entityService.create('api::tez-makalesi.tez-makalesi', {
        data: { title: 'Etik Değerler Tezi #2', subtitle: 'Kurumsal etik ve performans' },
      });
      console.log('[seed] tez-makalesi: 2 kayıt eklendi');
    }

    // Dijital Miras Hikayesi seed
    const dhCount = await strapi.entityService.count('api::dijital-miras-hikayesi.dijital-miras-hikayesi', {});
    if (dhCount === 0) {
      await strapi.entityService.create('api::dijital-miras-hikayesi.dijital-miras-hikayesi', {
        data: { title: 'Köyün Su Değirmeni', category: 'Kültür' },
      });
      await strapi.entityService.create('api::dijital-miras-hikayesi.dijital-miras-hikayesi', {
        data: { title: 'Eski Pazar Gelenekleri', category: 'Tarih' },
      });
      console.log('[seed] dijital-miras-hikayesi: 2 kayıt eklendi');
    }

    // Hizmet seed
    const hizmetCount = await strapi.entityService.count('api::hizmet.hizmet', {});
    if (hizmetCount === 0) {
      await strapi.entityService.create('api::hizmet.hizmet', {
        data: { name: 'Strateji ve Dönüşüm', description: '90 günlük dönüşüm oyun kitabı' },
      });
      await strapi.entityService.create('api::hizmet.hizmet', {
        data: { name: 'Bilgi Mimarisi', description: 'Dijital bilgi & miras modelleme' },
      });
      console.log('[seed] hizmet: 2 kayıt eklendi');
    }
  },
};
