import BlogPosts from '@components/BlogPosts/BlogPosts';
import { MainImageBox } from '@components/Home';
import { BlogPageImg } from '@images/index';
import { Container } from '@mui/material';

const BlogPage = () => {
  return (
    <>
      <MainImageBox
        img={BlogPageImg}
        title="Exploring the Art of Ink: A Journey into the World of Tattoos"
        subtitle="Inked Stories: Unveiling the Meaning, History, and Creativity Behind Tattoos"
      />
      <Container maxWidth="lg">
        <BlogPosts />
      </Container>
    </>
  );
};

export default BlogPage;
