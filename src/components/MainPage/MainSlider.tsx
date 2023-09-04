import { Button, Container, Typography } from '@mui/material';
import './MainPage.scss';

const MainSlider = () => {
  return (
    <Container
      className="main-slider"
      maxWidth="lg"
      sx={{ marginTop: 4, height: '40vh' }}
    >
      <Container maxWidth="md" sx={{ p: 0, pt: 5 }}>
        <Typography variant="h1" mb={2}>
          Discover tattoo world now!
        </Typography>
        <Typography variant="body2" mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </Typography>
        <div className="buttons-main-slider">
          <Button variant="contained" size="medium">
            Artists
          </Button>
          <Button variant="outlined" size="medium">
            Studios
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default MainSlider;
