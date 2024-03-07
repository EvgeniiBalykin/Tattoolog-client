import {
  AboutMain,
  WhyUsMain,
  JoinUsMain,
  PartnersSlider,
  MainImageBox,
} from '@components/Home';
import { MainHandImg } from '@images/index';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { HOME_IMAGE_BOX } from './contants';
import './HomePage.scss';

export const HomePage = () => {
  const { t } = useTranslation();
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>Tattoolog</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Global catalog of tattoo artists and studios"
        />
        <meta
          name="keywords"
          content="tattoolog tattoo catalog artist studio worldwide"
        />
        <meta property="og:title" content="Tattoolog" />
        <meta property="og:description" content="Discover tattoo world now!" />
        <meta property="og:type" content="main" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={MainHandImg} />
      </Helmet>
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
