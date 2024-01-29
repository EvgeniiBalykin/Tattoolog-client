import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@locales/en/translation.json';
import ua from '@locales/ua/translation.json';
import de from '@locales/de/translation.json';
import pl from '@locales/pl/translation.json';
import { LANGUAGE_LOCAL_STORAGE_KEY } from './constants';
import { getDomain } from '@helpers/getDomain';

const saveSelectedLanguage = (language: string) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, language);
};

const getSelectedLanguage = () => {
  return localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || getDomain();
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ua: {
      translation: ua,
    },
    de: {
      translation: de,
    },
    pl: {
      translation: pl,
    },
  },
  lng: getSelectedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, saveSelectedLanguage };
