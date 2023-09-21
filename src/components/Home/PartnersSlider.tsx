import { Box, Container, Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
  Partners_1,
  Partners_2,
  Partners_3,
  Partners_4,
  Partners_5,
} from 'images/index';
import { ReactElement, useMemo } from 'react';
import ExpandedPanel from './ExpanedPanel';

const SliderImages: string[] = [
  Partners_1,
  Partners_2,
  Partners_3,
  Partners_4,
  Partners_5,
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
            margin: 0,
            '@media (max-width: 920px)': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
            },
          }}
        >
          <img src={el} width="200px" height="200px" />
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
