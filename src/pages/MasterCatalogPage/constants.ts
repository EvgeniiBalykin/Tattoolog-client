import {
  MasterCatalogueImg,
  TopRatedImg,
  GlobalReachImg,
  LocatorImg,
  AmazingArtImg,
} from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

export const MASTER_CATALOGUE_MAIN: IMainImageBox = {
  title: 'pages.artists_page.title',
  subtitle: 'pages.artists_page.subtitle',
  extraSubtitle: 'pages.artists_page.subtitle_1',
  joinTitle: 'pages.artists_page.join.title',
  joinSubtitle: 'pages.artists_page.join.subtitle',
  buttons: [{ text: 'buttons.catalogue', link: '' }],
  img: MasterCatalogueImg,
};

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
