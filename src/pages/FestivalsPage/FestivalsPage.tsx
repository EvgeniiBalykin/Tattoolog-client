import FestivalPosts from '@components/FestivalPosts/FestivalPosts';
import { MainImageBox } from '@components/Home';
import { FestivalImg } from '@images/index';
import { Container } from '@mui/material';

const FestivalsPage = () => {
  return (
    <>
      <MainImageBox
        img={FestivalImg}
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
