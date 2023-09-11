import { Box, Button, Container, Typography } from '@mui/material';

const MainSlider = () => {
  return (
    <Container
      className="main-slider"
      maxWidth="lg"
      sx={{ marginTop: 4, height: '50vh' }}
    >
      <Container maxWidth="md" sx={{ p: 0, pt: 5 }}>
        <Typography variant="h1" mb={2}>
          Discover tattoo world now!
        </Typography>
        <Box maxWidth={500}>
          <Typography variant="h5" mb={2} textAlign="start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
            eu pharetra nec, mattis ac neque.
          </Typography>
        </Box>
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
