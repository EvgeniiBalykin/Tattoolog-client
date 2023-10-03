import {
  AboutMain,
  WhyUsMain,
  JoinUsMain,
  PartnersSlider,
  MainImageBox,
} from '@components/Home';
import { HOME_IMAGE_BOX } from './contants';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <>
      <MainImageBox
        title={HOME_IMAGE_BOX.title}
        subtitle={HOME_IMAGE_BOX.subtitle}
        buttons={HOME_IMAGE_BOX.buttons}
        img={HOME_IMAGE_BOX.img}
      />
      <AboutMain />
      <WhyUsMain />
      <JoinUsMain />
      <PartnersSlider />
    </>
  );
};
