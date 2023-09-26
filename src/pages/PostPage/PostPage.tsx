import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetBlogPostQuery } from 'services/toolsApi';

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post } = useGetBlogPostQuery(id || '');

  useEffect(() => {
    document.title = post?.meta_title_tag || 'Tattolog';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute('content', post?.meta_description || '');
    }
    if (metaKeywords) {
      metaKeywords.setAttribute('content', post?.meta_keywords || '');
    }
    if (ogTitle) {
      ogTitle.setAttribute('content', post?.opengraph_title || '');
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', post?.opengraph_description || '');
    }
  }, [post]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: 'rgba(60, 60, 60, 0.3)',
        padding: '30px 10px',
        borderRadius: '10px',
        marginBottom: '20px',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${post?.image})`,
          backgroundSize: 'cover',
          position: 'relative',
        }}
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          sx={{ backgroundColor: 'rgba(60, 60, 60, 0.4)' }}
        />
        <Typography variant="h1" position="relative">
          {post?.title.toUpperCase()}
        </Typography>
      </Box>
      <Typography variant="h5" textAlign="justify" paddingTop="40px">
        {post?.body}
      </Typography>
    </Container>
  );
};

export default PostPage;
