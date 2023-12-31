import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@locales/en/translation.json';
// import ru from '@locales/ru/translation.json';
// import ua from '@locales/ua/translation.json';
import de from '@locales/de/translation.json';
import pl from '@locales/pl/translation.json';
import { LANGUAGE_LOCAL_STORAGE_KEY } from './constants';

export const LANG_BY_DOMAIN = () => {
  const currentDomain = window.location.hostname.split('.');
  const domainCountry = currentDomain[currentDomain.length - 1];
  return domainCountry !== 'localhost' && domainCountry !== 'uk'
    ? domainCountry
    : 'en';
};

const saveSelectedLanguage = (language: string) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, language);
};

const getSelectedLanguage = () => {
  return localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || LANG_BY_DOMAIN();
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    // ru: {
    //   translation: ru,
    // },
    // ua: {
    //   translation: ua,
    // },
    de: {
      translation: de,
    },
    pl: {
      translation: pl,
    },
  },
  lng: getSelectedLanguage(),
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, saveSelectedLanguage };
