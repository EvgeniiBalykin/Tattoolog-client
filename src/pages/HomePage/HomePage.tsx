import {
  MainSlider,
  AboutMain,
  WhyUsMain,
  JoinUsMain,
  PartnersSlider,
} from 'components/Home';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <>
      <MainSlider />
      <AboutMain />
      <WhyUsMain />
      <JoinUsMain />
      <PartnersSlider />
    </>
  );
};
