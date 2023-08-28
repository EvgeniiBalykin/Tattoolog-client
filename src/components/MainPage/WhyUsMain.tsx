import { Container, Grid, Typography } from '@mui/material';
import './MainPage.scss';
import Rocket from 'images/Rocket.svg';
import Lens from 'images/Lens.svg';
import Cup from 'images/Cup.svg';

const WhyUsMain = () => {
  return (
    <div className="wrapper-reverse">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          Why us?
        </Typography>
        <Typography variant="h4" textAlign="center">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus.
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Rocket} />
            </div>
            <Typography variant="h4" textAlign="center">
              Use this space to describe one benefit of your affiliate program.
            </Typography>
          </Grid>
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Cup} />
            </div>
            <Typography variant="h4" textAlign="center">
              Use this space to describe one benefit of your affiliate program.
            </Typography>
          </Grid>
          <Grid item xs={14} sm={4} md={4}>
            <div className="img-wrapper">
              <img src={Lens} />
            </div>
            <Typography variant="h4" textAlign="center">
              Use this space to describe one benefit of your affiliate program.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhyUsMain;
