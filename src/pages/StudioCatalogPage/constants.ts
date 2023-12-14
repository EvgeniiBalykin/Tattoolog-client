import {
  StudioCatalogueImg,
  StarImg,
  SafetyFirstImg,
  CustomerLoveImg,
} from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

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
