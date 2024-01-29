import { MainImageBox } from '@components/Home';
import {
  MagazineImg_1,
  MagazineImg_2,
  MagazineImg_3,
  MagazineImg_4,
  MagazineImg_5,
  MagazineTitle,
} from '@images/index';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AliceCarousel from 'react-alice-carousel';
import { useTranslation } from 'react-i18next';

const carouselImgs = [
  MagazineImg_1,
  MagazineImg_2,
  MagazineImg_3,
  MagazineImg_4,
  MagazineImg_5,
];

const carouselItems = carouselImgs.map((el) => (
  <div style={{ textAlign: 'center' }}>
    <img loading="lazy" width="auto" height="600px" src={el} />
  </div>
));

const MagazinePage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MainImageBox
        title={t('pages.magazine_page.title')}
        img={MagazineTitle}
      />
      <Container maxWidth="lg">
        <Grid
          spacing={{ xs: 1, sm: 1, md: 2 }}
          container
          justifyContent="center"
        >
          <Grid item md={5} lg={5}>
            <Typography variant="h2" textAlign="center" mb={2}>
              {t('pages.magazine_page.magazine')}
            </Typography>
            <Box mb={2} maxWidth={400} margin="0 auto">
              <AliceCarousel items={carouselItems} />
            </Box>
            <Box mb={2} textAlign="center">
              <Button
                variant="outlined"
                color="secondary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfDF6CvLQFeW72-Klz3EosiFCqGzjNkrJSlQr-r3t0tdWw8Nw/viewform"
                target="_blank"
              >
                Buy magazine
              </Button>
            </Box>
          </Grid>
          <Grid item md={5} lg={6} padding="0 5px">
            <Typography variant="h2" textAlign="center" mb={2}>
              {t('pages.magazine_page.get_magazine')}
            </Typography>
            <Typography variant="h4" textAlign="start">
              {t('pages.magazine_page.description')}
            </Typography>
            <Box mt={2}>
              <ul>
                <Typography variant="h4" mb={2}>
                  {t('pages.magazine_page.prices.title')}:
                </Typography>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.half_page')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.one_page')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.u_turn')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.u_turn_2')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.interview')}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    {t('pages.magazine_page.prices.card')}
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box mt={4} textAlign="center">
              <Button
                variant="outlined"
                color="secondary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPcHjlgpXk1AaCOF9hBiVN3RvXsp9ByoqKeQSW5yDmyifUsQ/viewform"
                target="_blank"
              >
                Submission form
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MagazinePage;
