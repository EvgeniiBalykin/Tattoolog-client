import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/locales/en/translation.json';
import ru from '../src/locales/ru/translation.json';

const LANGUAGE_LOCAL_STORAGE_KEY = 'selectedLanguage';

const saveSelectedLanguage = (language: string) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, language);
};

const getSelectedLanguage = () => {
  return localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: getSelectedLanguage(),
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, saveSelectedLanguage };
