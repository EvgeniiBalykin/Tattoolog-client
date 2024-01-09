import { ICatalogueProps, ILanguages } from '@interfaces/index';

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
  //   name: 'Українська',
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

const DEFAULT_CATALOGUE_OPTIONS = [
  { name: 'buttons.none', value: '' },
  { name: 'buttons.yes', value: 'true' },
  { name: 'buttons.no', value: 'false' },
];

export const FILTERS_CATALOGUE: {
  name: keyof ICatalogueProps;
  label: string;
  type: string;
  options?: { name: string; value: string }[];
}[] = [
  {
    name: 'name',
    label: 'form.name',
    type: 'text',
  },
  {
    name: 'city',
    label: 'form.city',
    type: 'text',
  },
  {
    name: 'country',
    label: 'form.country',
    type: 'text',
  },
  {
    name: 'work_type',
    label: 'Work type',
    type: 'select',
  },
  {
    name: 'relocate',
    label: 'Relocate',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'open_to_work',
    label: 'Open to work',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'mentor',
    label: 'Mentor',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'rating',
    label: 'Rating',
    type: 'select',
    options: [
      { name: '0-5', value: 'asc' },
      { name: '5-0', value: 'desc' },
    ],
  },
];

export const LANGUAGE_LOCAL_STORAGE_KEY = 'selectedLanguage';
