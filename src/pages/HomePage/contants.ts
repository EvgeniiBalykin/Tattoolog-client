// import { Cup, Lens, MainHand, Rocket } from '../../../public/images/index';
// import { IDescriptionIcons, IMainImageBox } from '@types';

import { Cup, MainHand, Rocket, Lens } from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

export const WHY_US_ICONS: IDescriptionIcons[] = [
  {
    icon: Rocket,
    title: 'pages.main.why_us_block.title_1',
    subtitle: 'pages.main.why_us_block.subtitle_1',
  },
  {
    icon: Cup,
    title: 'pages.main.why_us_block.title_2',
    subtitle: 'pages.main.why_us_block.subtitle_2',
  },
  {
    icon: Lens,
    title: 'pages.main.why_us_block.title_3',
    subtitle: 'pages.main.why_us_block.subtitle_3',
  },
];

export const HOME_IMAGE_BOX: IMainImageBox = {
  title: 'Discover tattoo world now!',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
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
  img: MainHand,
};
