import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'tr'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  // Mesajları messages klasöründen yükle
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {messages};
});
