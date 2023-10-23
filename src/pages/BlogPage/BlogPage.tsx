import BlogPosts from '@components/BlogPosts/BlogPosts';
import { MainImageBox } from '@components/Home';
import { BlogPage_2 } from '@images/index';
import { Container } from '@mui/material';

const BlogPage = () => {
  return (
    <Container maxWidth="lg">
      <MainImageBox
        img={BlogPage_2}
        title="Exploring the Art of Ink: A Journey into the World of Tattoos"
        subtitle="Inked Stories: Unveiling the Meaning, History, and Creativity Behind Tattoos"
      />
      <BlogPosts />
    </Container>
  );
};

export default BlogPage;
