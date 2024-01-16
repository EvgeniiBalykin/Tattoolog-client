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
  return (
    <Container>
      <MainImageBox
        title="The first magazine in Europe about the world of tattoo industry"
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
              MAGAZINE TATTOOLOG
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
              DO YOU WANT TO GET INTO THE MAGAZINE?
            </Typography>
            <Typography variant="h4" textAlign="start">
              TATTOOLOG magazine is issued twice a year, the circulation of the
              magazine is 10000 pieces, hardcover, gloss (for example, Maxim
              magazine). The main goal of advertising is for craftsmen and the
              industry as a whole. Plus news and interesting articles. The
              magazine is distributed in Europe for FREE. Each master and store
              that will be in the magazine receives 3 copies. A list of places
              where our magazine will be available on the site. Placement in the
              magazine is PAID, but at the price of a print run. The printing
              house invoices us and we divide it into pages, so the placement is
              very affordable. You can also help with the distribution of the
              magazine in your city.
            </Typography>
            <Box mt={2}>
              <ul>
                <Typography variant="h4" mb={2}>
                  Post Price:
                </Typography>
                <li>
                  <Typography variant="h4">Half page - 80 PLN</Typography>
                </li>
                <li>
                  <Typography variant="h4">One page - 150 PLN</Typography>
                </li>
                <li>
                  <Typography variant="h4">U-Turn - 250 PLN</Typography>
                </li>
                <li>
                  <Typography variant="h4">Two U-turns - 400 PLN</Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    Interview (one page) - 150 PLN
                  </Typography>
                </li>
                <li>
                  <Typography variant="h4">
                    Business card and sketch - 30 PLN for 1 piece
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
