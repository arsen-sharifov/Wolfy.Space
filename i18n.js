import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import uk from './public/locales/pl/common.json';
import ru from './public/locales/ua/common.json';

const resources = {
  en: {
    common: en,
  },
  uk: {
    common: uk,
  },
  ru: {
    common: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
