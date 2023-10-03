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
  title: 'Unleash Your Inner Canvas!',
  subtitle:
    'Discover top-notch tattoo artists and their jaw-dropping creations',
  buttons: [{ text: 'catalogue', link: '' }],
  img: MasterCatalogue,
};

export const SALON_CATALOGUE_MAIN: IMainImageBox = {
  title: 'Inked paradise — this is where the best converge',
  subtitle: 'Breathtaking Studios List',
  buttons: [{ text: 'catalogue', link: '' }],
  img: StudioCatalogue,
};

export const MASTER_CATALOG_ICONS: IDescriptionIcons[] = [
  {
    icon: Medal,
    title: 'Top Rated',
    subtitle:
      'Experience the remarkable works of top-rated tattoo artists worldwide.',
  },
  {
    icon: Location,
    title: 'Global Reach',
    subtitle:
      'Discover exceptional talent from artists based in every corner of the world.',
  },
  {
    icon: Amazing_art,
    title: 'Amazing Art',
    subtitle:
      'Feast your eyes on jaw-dropping masterpieces etched on human canvases.',
  },
  {
    icon: Target,
    title: 'Ink Locator',
    subtitle:
      'Find the tattoo that calls out to you and the artist who brought it to life.',
  },
];
