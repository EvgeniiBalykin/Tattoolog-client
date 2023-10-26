import BlogPosts from '@components/BlogPosts/BlogPosts';
import { MainImageBox } from '@components/Home';
import { BlogPage_2 } from '@images/index';
import { Container } from '@mui/material';

const BlogPage = () => {
  return (
    <>
      <MainImageBox
        img={BlogPage_2}
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
