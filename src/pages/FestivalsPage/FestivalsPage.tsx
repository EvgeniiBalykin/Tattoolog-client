import FestivalPosts from '@components/FestivalPosts/FestivalPosts';
import { MainImageBox } from '@components/Home';
import { Festival } from '@images/index';
import { Container } from '@mui/material';

const FestivalsPage = () => {
  return (
    <>
      <MainImageBox
        img={Festival}
        title="Exploring the Art of Ink: A Journey into the World of Tattoos"
        subtitle="."
      />
      <Container maxWidth="lg">
        <FestivalPosts />
      </Container>
    </>
  );
};

export default FestivalsPage;
