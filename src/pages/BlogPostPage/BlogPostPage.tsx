import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router';
import { useGetBlogPostQuery } from '@services/toolsApi';
import React from 'react';
import LoadingProcess from '@components/LoadingProcess/LoadingProcess';
import { Helmet } from 'react-helmet-async';

const BlogPostPage = () => {
  const { slug, id } = useParams<string>();
  const { data: post } = useGetBlogPostQuery({ slug, lang: id });

  if (!post) {
    return <LoadingProcess />;
  }

  return (
    <Container maxWidth="lg">
      <Helmet prioritizeSeoTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{post.blog_meta?.meta_title_tag}</title>
        <meta name="description" content={post.blog_meta?.meta_description} />
        <meta name="keywords" content={post.blog_meta?.meta_keywords} />
        <meta property="og:title" content={post.blog_meta?.opengraph_title} />
        <meta
          property="og:description"
          content={post.blog_meta?.opengraph_description}
        />
      </Helmet>
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
                <Grid item md={6} xs={8} key={index}>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '25em',
                      maxWidth: '25em',
                    }}
                    src={el.photo}
                    alt={el.alt_name}
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
