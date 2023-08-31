import AboutMain from 'components/MainPage/AboutMain';
import JoinUsMain from 'components/MainPage/JoinUsMain';
import PartnersSlider from 'components/MainPage/PartnersSlider';
import WhyUsMain from 'components/MainPage/WhyUsMain';

export const HomePage = () => {
  return (
    <>
      <AboutMain />
      <WhyUsMain />
      <JoinUsMain />
      <PartnersSlider />
    </>
  );
};
