import { Box, Container, Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ReactElement, useMemo } from 'react';
import ExpandedPanel from './ExpanedPanel';
import { useTranslation } from 'react-i18next';
import { useGetPartnersQuery } from '@services/toolsApi';

const PartnersSlider = () => {
  const { t } = useTranslation();
  const { data } = useGetPartnersQuery();
  const SliderItems = useMemo((): ReactElement<string, string>[] => {
    if (data) {
      return data.map((el, key) => (
        <img
          loading="lazy"
          width="200px"
          height="200px"
          key={key}
          src={el.logo}
          onClick={() => window.open(el.link)}
          style={{ cursor: 'pointer', backgroundColor: '#f5f5f5' }}
        />
      ));
    }
    return [];
  }, [data]);

  return (
    <Box className="wrapper">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center">
          {t('pages.partners')}
        </Typography>
        <AliceCarousel
          items={SliderItems}
          infinite
          autoPlayInterval={1000}
          animationDuration={3000}
          autoWidth
          autoPlay
          disableButtonsControls
        />
        <Typography variant="h1" textAlign="center" mt={10}>
          FAQ
        </Typography>
        <ExpandedPanel />
      </Container>
    </Box>
  );
};

export default PartnersSlider;
