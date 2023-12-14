import { CupImg, MainHandImg, RocketImg, LensImg } from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

export const WHY_US_ICONS: IDescriptionIcons[] = [
  {
    icon: RocketImg,
    title: 'pages.main.why_us_block.title_1',
    subtitle: 'pages.main.why_us_block.subtitle_1',
  },
  {
    icon: CupImg,
    title: 'pages.main.why_us_block.title_2',
    subtitle: 'pages.main.why_us_block.subtitle_2',
  },
  {
    icon: LensImg,
    title: 'pages.main.why_us_block.title_3',
    subtitle: 'pages.main.why_us_block.subtitle_3',
  },
];

export const HOME_IMAGE_BOX: IMainImageBox = {
  title: 'pages.main.title',
  subtitle: 'pages.main.subtitle',
  buttons: [
    {
      text: 'buttons.artists',
      link: '/master_catalog',
    },
    {
      text: 'buttons.studios',
      link: '/salon_catalog',
    },
  ],
  img: MainHandImg,
};
