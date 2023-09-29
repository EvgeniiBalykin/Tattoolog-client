import { Box, Container, Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
  Partner_1,
  Partner_2,
  Partner_3,
  Partner_4,
  Partner_5,
} from 'images/index';
import { ReactElement, useMemo } from 'react';
import ExpandedPanel from './ExpanedPanel';

const SliderImages: string[] = [
  Partner_1,
  Partner_2,
  Partner_3,
  Partner_4,
  Partner_5,
];

const PartnersSlider = () => {
  const SliderItems = useMemo(
    (): ReactElement<string, string>[] =>
      SliderImages.map((el, key) => (
        <Container
          key={key}
          maxWidth="xs"
          sx={{
            padding: 0,
            margin: '0 50px',
          }}
        >
          <img src={el} width="250px" height="200px" />
        </Container>
      )),
    []
  );

  return (
    <Box className="wrapper-reverse">
      <Container maxWidth="lg">
        <Typography variant="h1" textAlign="center">
          Partners
        </Typography>
        <AliceCarousel
          disableDotsControls
          autoPlayInterval={3000}
          autoPlay
          mouseTracking
          infinite
          disableButtonsControls
          autoWidth
          items={SliderItems}
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
