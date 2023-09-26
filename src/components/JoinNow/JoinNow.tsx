import { Typography, Container, Button } from '@mui/material';
import './JoinNow.scss';

const JointNow = () => {
  return (
    <Container className="join-now-wrapper" maxWidth="lg">
      <Typography variant="h1">
        Ready to Join Our Tattoo Artist Catalogue?
      </Typography>
      <Typography variant="h4" mb={4}>
        The cult of tattoo legends — where innovation meets inspiration and
        forever transforms your body canvas. Escape into the immersive realm of
        artistic odysseys and treasure the opportunity to adorn your skin with
        timeless masterpieces.
      </Typography>
      <Button color="info" variant="contained">
        JOIN NOW
      </Button>
    </Container>
  );
};

export default JointNow;
