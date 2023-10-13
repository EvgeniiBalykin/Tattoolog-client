import {
  MasterCatalogue,
  StudioCatalogue,
  Medal,
  Location,
  Target,
  Amazing_art,
} from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

export const MASTER_CATALOGUE_MAIN: IMainImageBox = {
  title: 'pages.artists_page.title',
  subtitle: 'pages.artists_page.subtitle',
  joinTitle: 'pages.artists_page.join.title',
  joinSubtitle: 'pages.artists_page.join.subtitle',
  buttons: [{ text: 'buttons.catalogue', link: '' }],
  img: MasterCatalogue,
};

export const SALON_CATALOGUE_MAIN: IMainImageBox = {
  title: 'pages.studios_page.title',
  subtitle: 'pages.studios_page.subtitle',
  joinTitle: 'pages.studios_page.join.title',
  joinSubtitle: 'pages.studios_page.join.subtitle',
  buttons: [{ text: 'buttons.catalogue', link: '' }],
  img: StudioCatalogue,
};

export const MASTER_CATALOG_ICONS: IDescriptionIcons[] = [
  {
    icon: Medal,
    title: 'pages.artists_page.info.1.title',
    subtitle: 'pages.artists_page.info.1.subtitle',
  },
  {
    icon: Location,
    title: 'pages.artists_page.info.2.title',
    subtitle: 'pages.artists_page.info.2.subtitle',
  },
  {
    icon: Amazing_art,
    title: 'pages.artists_page.info.3.title',
    subtitle: 'pages.artists_page.info.3.subtitle',
  },
  {
    icon: Target,
    title: 'pages.artists_page.info.4.title',
    subtitle: 'pages.artists_page.info.4.subtitle',
  },
];

export const STUDIO_CATALOG_ICONS: IDescriptionIcons[] = [
  {
    icon: Medal,
    title: 'pages.studios_page.info.1.title',
    subtitle: 'pages.studios_page.info.1.subtitle',
  },
  {
    icon: Location,
    title: 'pages.studios_page.info.2.title',
    subtitle: 'pages.studios_page.info.2.subtitle',
  },
  {
    icon: Amazing_art,
    title: 'pages.studios_page.info.3.title',
    subtitle: 'pages.studios_page.info.3.subtitle',
  },
];
