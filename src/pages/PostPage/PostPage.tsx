import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetBlogPostQuery } from '@services/toolsApi';

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
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundImage: `url(${post?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          borderRadius: '8px', // Округленные углы
          overflow: 'hidden', // Обрезка изображения, чтобы округленные углы были видны
        }}
        height="300px" // Увеличил высоту для лучшего эффекта
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          sx={{ backgroundColor: 'rgba(60, 60, 60, 0.5)' }}
        />
        <Typography
          variant="h1"
          position="relative"
          color="white"
          textAlign="center"
          zIndex={1}
        >
          {post?.title.toUpperCase()}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        textAlign="justify"
        paddingTop="40px"
        color="white"
        lineHeight={1.6}
      >
        {post?.body}
      </Typography>
    </Container>
  );
};

export default PostPage;
