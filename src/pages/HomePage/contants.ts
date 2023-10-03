// import { Cup, Lens, MainHand, Rocket } from '../../../public/images/index';
// import { IDescriptionIcons, IMainImageBox } from '@types';

import { Cup, MainHand, Rocket, Lens } from '@images/index';
import { IDescriptionIcons, IMainImageBox } from '@interfaces/index';

export const WHY_US_ICONS: IDescriptionIcons[] = [
  {
    icon: Rocket,
    subtitle:
      'Use this space to describe one benefit of your affiliate program.',
  },
  {
    icon: Cup,
    subtitle:
      'Use this space to describe one benefit of your affiliate program.',
  },
  {
    icon: Lens,
    subtitle:
      'Use this space to describe one benefit of your affiliate program.',
  },
];

export const HOME_IMAGE_BOX: IMainImageBox = {
  title: 'Discover tattoo world now!',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
  buttons: [
    {
      text: 'Artists',
      link: '/master_catalog',
    },
    {
      text: 'Studios',
      link: '/salon_catalog',
    },
  ],
  img: MainHand,
};
