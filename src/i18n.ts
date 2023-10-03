import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@locales/en/translation.json';
import ru from '@locales/ru/translation.json';
import ua from '@locales/ua/translation.json';

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
    ua: {
      translation: ua,
    },
  },
  lng: getSelectedLanguage(),
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, saveSelectedLanguage };
