import {
  AboutMain,
  WhyUsMain,
  JoinUsMain,
  PartnersSlider,
  MainImageBox,
} from '@components/Home';
import { useTranslation } from 'react-i18next';
import { HOME_IMAGE_BOX } from './contants';
import './HomePage.scss';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainImageBox
        title={t(HOME_IMAGE_BOX.title)}
        subtitle={t(HOME_IMAGE_BOX.subtitle)}
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
