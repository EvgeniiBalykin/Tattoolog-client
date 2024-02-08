import { DEFAULT_CATALOGUE_OPTIONS } from '@constants/index';
import {
  MasterCatalogueImg,
  TopRatedImg,
  GlobalReachImg,
  LocatorImg,
  AmazingArtImg,
} from '@images/index';
import {
  ICatalogueProps,
  IDescriptionIcons,
  IMainImageBox,
} from '@interfaces/index';

export const MASTER_CATALOGUE_MAIN: IMainImageBox = {
  title: 'pages.artists_page.title',
  subtitle: 'pages.artists_page.subtitle',
  extraSubtitle: 'pages.artists_page.subtitle_1',
  joinTitle: 'pages.artists_page.join.title',
  joinSubtitle: 'pages.artists_page.join.subtitle',
  buttons: [{ text: 'buttons.catalogue', link: '' }],
  img: MasterCatalogueImg,
};

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
  {
    name: 'moderation_associate_type',
    label: 'Association',
    type: 'select',
  },
  {
    name: 'trusted_mentor',
    label: 'Trusted mentor',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
  {
    name: 'posted_in_journal',
    label: 'Posted in magazine',
    type: 'select',
    options: DEFAULT_CATALOGUE_OPTIONS,
  },
];

export const MASTER_CATALOG_ICONS: IDescriptionIcons[] = [
  {
    icon: TopRatedImg,
    title: 'pages.artists_page.info.1.title',
    subtitle: 'pages.artists_page.info.1.subtitle',
  },
  {
    icon: GlobalReachImg,
    title: 'pages.artists_page.info.2.title',
    subtitle: 'pages.artists_page.info.2.subtitle',
  },
  {
    icon: AmazingArtImg,
    title: 'pages.artists_page.info.3.title',
    subtitle: 'pages.artists_page.info.3.subtitle',
  },
  {
    icon: LocatorImg,
    title: 'pages.artists_page.info.4.title',
    subtitle: 'pages.artists_page.info.4.subtitle',
  },
];
