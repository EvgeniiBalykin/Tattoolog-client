import FestivalPosts from '@components/FestivalPosts/FestivalPosts';
import { MainImageBox } from '@components/Home';
import { FestivalImg } from '@images/index';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FestivalsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainImageBox
        img={FestivalImg}
        title={t('pages.festival_page.title')}
        subtitle={t('pages.festival_page.subtitle')}
      />
      <Container maxWidth="lg">
        <FestivalPosts />
      </Container>
    </>
  );
};

export default FestivalsPage;
