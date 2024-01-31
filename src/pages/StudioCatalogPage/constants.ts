import { DEFAULT_CATALOGUE_OPTIONS } from '@constants/index';
import {
  StudioCatalogueImg,
  StarImg,
  SafetyFirstImg,
  CustomerLoveImg,
} from '@images/index';
import {
  ICatalogueProps,
  IDescriptionIcons,
  IMainImageBox,
} from '@interfaces/index';

export const SALON_CATALOGUE_MAIN: IMainImageBox = {
  title: 'pages.studios_page.title',
  subtitle: 'pages.studios_page.subtitle',
  extraSubtitle: 'pages.studios_page.subtitle_1',
  joinTitle: 'pages.studios_page.join.title',
  joinSubtitle: 'pages.studios_page.join.subtitle',
  buttons: [{ text: 'buttons.catalogue', link: '' }],
  img: StudioCatalogueImg,
};

export const STUDIO_CATALOG_ICONS: IDescriptionIcons[] = [
  {
    icon: StarImg,
    title: 'pages.studios_page.info.1.title',
    subtitle: 'pages.studios_page.info.1.subtitle',
  },
  {
    icon: SafetyFirstImg,
    title: 'pages.studios_page.info.2.title',
    subtitle: 'pages.studios_page.info.2.subtitle',
  },
  {
    icon: CustomerLoveImg,
    title: 'pages.studios_page.info.3.title',
    subtitle: 'pages.studios_page.info.3.subtitle',
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
  {
    name: 'moderation_associate_type',
    label: 'Association',
    type: 'select',
  },
];
