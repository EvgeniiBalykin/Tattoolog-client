import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetBlogPostQuery } from '@services/toolsApi';

const PostPage = () => {
  const { slug, id } = useParams<string>();
  const { data: post } = useGetBlogPostQuery({ slug, lang: id });

  useEffect(() => {
    document.title = post?.blog_meta?.meta_title_tag || 'Tattolog';
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        post?.blog_meta?.meta_description || ''
      );
    }
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        post?.blog_meta?.meta_keywords || ''
      );
    }
    if (ogTitle) {
      ogTitle.setAttribute('content', post?.blog_meta?.opengraph_title || '');
    }
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        post?.blog_meta?.opengraph_description || ''
      );
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
          borderRadius: '8px',
          overflow: 'hidden',
        }}
        height="300px"
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
      <Box display="flex" flexDirection="column">
        {post?.blog_body.map((el) => (
          <>
            <Typography
              variant="h3"
              textAlign="start"
              paddingTop="40px"
              color="white"
              fontFamily="'Playfair Display', serif"
              lineHeight={1.6}
            >
              {el?.title}
            </Typography>
            <Typography
              variant="h5"
              textAlign="start"
              paddingTop="40px"
              color="white"
              lineHeight={1.6}
              marginBottom={4}
            >
              {el.body}
            </Typography>
            <Box maxWidth={1200} display="flex" justifyContent="space-around">
              {el?.blog_body_photo.map((el) => (
                <img
                  style={{
                    width: '400px',
                    height: '300px',
                  }}
                  src={el.photo}
                  alt={el.alt_name}
                />
              ))}
            </Box>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default PostPage;
