'use client';
import { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ua', 'pl', 'de', 'pt', 'fr'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export function I18nInit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const language = localStorage.getItem('language') || 'en';
      i18n.changeLanguage(language);
    }
  }, []);

  return null;
}

export default i18n;
