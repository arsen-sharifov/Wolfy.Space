'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import pl from './public/locales/pl/common.json';
import ua from './public/locales/ua/common.json';
import de from './public/locales/de/common.json';
import pt from './public/locales/pt/common.json';
import fr from './public/locales/fr/common.json';
import { useEffect } from 'react';

const resources = {
  en: {
    common: en,
  },
  ua: {
    common: ua,
  },
  pl: {
    common: pl,
  },
  de: {
    common: de,
  },
  pt: {
    common: pt,
  },
  fr: {
    common: fr,
  },
};

let savedLanguage = 'en';

if (typeof window !== 'undefined') {
  savedLanguage = localStorage.getItem('language') || 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
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
