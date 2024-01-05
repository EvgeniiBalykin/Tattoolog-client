import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router';
import { useGetBlogPostQuery } from '@services/toolsApi';
import React, { useEffect } from 'react';
import LoadingProcess from '@components/LoadingProcess/LoadingProcess';

const BlogPostPage = () => {
  const { slug, id } = useParams<string>();
  const { data: post } = useGetBlogPostQuery({ slug, lang: id });

  useEffect(() => {
    if (post) {
      document.title = post.title;

      const setMetaContent = (name: string, content: string) => {
        const metaElement = document.querySelector(`meta[name="${name}"]`);
        metaElement?.setAttribute('content', content);
      };

      const setOgMetaContent = (property: string, content: string) => {
        const metaElement = document.querySelector(
          `meta[property="${property}"]`
        );
        metaElement?.setAttribute('content', content);
      };

      setMetaContent('title', post.blog_meta?.meta_title_tag);
      setMetaContent('description', post.blog_meta?.meta_description);
      setMetaContent('keywords', post.blog_meta?.meta_keywords);
      setOgMetaContent('og:title', post.blog_meta?.opengraph_title);
      setOgMetaContent('og:description', post.blog_meta?.opengraph_description);
      setOgMetaContent('og:image', post.blog_meta?.opengraph_image);
    }
  }, [post]);

  if (!post) {
    return <LoadingProcess />;
  }

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
        {post?.blog_body.map((el, index) => (
          <React.Fragment key={index}>
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
            <Box
              mt={3}
              sx={{ color: 'white' }}
              dangerouslySetInnerHTML={{ __html: el.body }}
            />
            <Grid
              mt={2}
              container
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              textAlign="center"
              spacing={2}
            >
              {el?.blog_body_photo.map((el, index) => (
                <Grid item md={6} xs={8}>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '25em',
                      maxWidth: '25em',
                    }}
                    src={el.photo}
                    alt={el.alt_name}
                    key={index}
                  />
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};

export default BlogPostPage;
