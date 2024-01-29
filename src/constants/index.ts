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
  {
    code: 'ua',
    country_code: 'ua',
    name: 'UA',
  },
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

export const FILTERS_CATALOGUE_ARTISTS: {
  name: keyof ICatalogueProps;
  label: string;
  type: string;
  options?: { name: string; value: string }[];
  isLocation?: boolean;
}[] = [
  {
    name: 'name',
    label: 'form.name',
    type: 'text',
  },
  {
    name: 'country',
    label: 'form.country',
    type: 'select',
    isLocation: true,
  },
  {
    name: 'city',
    label: 'form.city',
    type: 'select',
    isLocation: true,
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
      { name: 'Z-a', value: 'asc' },
      { name: 'A-z', value: 'desc' },
    ],
  },
];

export const FILTERS_CATALOGUE_STUDIOS: {
  name: keyof ICatalogueProps;
  label: string;
  type: string;
  options?: { name: string; value: string }[];
  isLocation?: boolean;
}[] = [
  {
    name: 'name',
    label: 'form.name',
    type: 'text',
  },
  {
    name: 'country',
    label: 'form.country',
    type: 'select',
    isLocation: true,
  },
  {
    name: 'city',
    label: 'form.city',
    type: 'select',
    isLocation: true,
  },

  {
    name: 'work_type',
    label: 'Work type',
    type: 'select',
  },
  {
    name: 'open_to_work',
    label: 'Hiring',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'mentor',
    label: 'Education',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'rating',
    label: 'Rating',
    type: 'select',
    options: [
      { name: 'Z-a', value: 'asc' },
      { name: 'A-z', value: 'desc' },
    ],
  },
];

export const LANGUAGE_LOCAL_STORAGE_KEY = 'selectedLanguage';
