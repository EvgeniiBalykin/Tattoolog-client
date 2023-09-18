import { Box, Container, Grid, Typography } from '@mui/material';
import { Cup, Lens, Rocket } from 'images/index';

const WhyUsMain = () => {
  return (
    <Box className="wrapper-reverse">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          Why us?
        </Typography>
        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Typography variant="h5" textAlign="center">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </Typography>
        </Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Rocket} />
            </div>
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <Typography variant="h5" textAlign="center">
                Use this space to describe one benefit of your affiliate
                program.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Cup} />
            </div>
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <Typography variant="h5" textAlign="center">
                Use this space to describe one benefit of your affiliate
                program.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Lens} />
            </div>
            <Container maxWidth="sm" sx={{ mt: 4 }}>
              <Typography variant="h5" textAlign="center">
                Use this space to describe one benefit of your affiliate
                program.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUsMain;
