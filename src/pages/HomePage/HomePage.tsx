import {
  MainSlider,
  AboutMain,
  WhyUsMain,
  JoinUsMain,
  PartnersSlider,
} from 'modules/Home';
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
