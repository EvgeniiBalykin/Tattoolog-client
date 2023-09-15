import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const MainSlider = () => {
  const navigate = useNavigate();
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
          <Button
            variant="contained"
            size="medium"
            onClick={() => navigate('/master_catalog')}
          >
            Artists
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={() => navigate('/studio_catalog')}
          >
            Studios
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default MainSlider;
