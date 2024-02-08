import { ILanguages } from '@interfaces/index';

export const LANGUAGES: ILanguages[] = [
  // {
  //   code: 'ru',
  //   country_code: 'ru',
  //   name: 'Русский',
  // },
  {
    code: 'en',
    country_code: 'en',
    name: 'ENG',
  },
  // {
  //   code: 'ua',
  //   country_code: 'ua',
  //   name: 'UA',
  // },
  {
    code: 'de',
    country_code: 'de',
    name: 'DE',
  },
  {
    code: 'pl',
    country_code: 'pl',
    name: 'PL',
  },
];

export const DEFAULT_CATALOGUE_OPTIONS = [
  { name: 'buttons.none', value: '' },
  { name: 'buttons.yes', value: 'true' },
  { name: 'buttons.no', value: 'false' },
];

export const LANGUAGE_LOCAL_STORAGE_KEY = 'selectedLanguage';
