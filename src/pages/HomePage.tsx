import AboutMain from 'components/MainPage/AboutMain';
import JoinUsMain from 'components/MainPage/JoinUsMain';
import MainSlider from 'components/MainPage/MainSlider';
import PartnersSlider from 'components/MainPage/PartnersSlider';
import WhyUsMain from 'components/MainPage/WhyUsMain';

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
