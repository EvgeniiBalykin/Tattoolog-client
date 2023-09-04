import { Box, Container, Grid, Typography } from '@mui/material';
import { About_Photo_1, About_Photo_2 } from 'images/index';

import { useMemo } from 'react';
import './MainPage.scss';

const AboutMain = () => {
  const reverseGrid = useMemo(
    () => (window.innerWidth <= 390 ? 'column-reverse' : undefined),
    [window.innerWidth]
  );

  return (
    <Box className="wrapper">
      <Container component="main">
        <Typography
          mt={4}
          variant="h1"
          textAlign="center"
          textTransform="uppercase"
        >
          About us
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="img-wrapper">
              <img src={About_Photo_2} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="text-wrapper">
              <Typography variant="h2">Primary benefit showcase</Typography>
              <Typography variant="h4">
                Show how your product's features matter, how they set you apart
                from the competition, and how you can transform your customer's
                experience at work or at home
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          className="second-grid"
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
          flexDirection={reverseGrid}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="text-wrapper">
              <Typography variant="h2">Primary benefit showcase</Typography>
              <Typography variant="h4">
                Show how your product's features matter, how they set you apart
                from the competition, and how you can transform your customer's
                experience at work or at home
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="img-wrapper">
              <img src={About_Photo_1} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMain;
