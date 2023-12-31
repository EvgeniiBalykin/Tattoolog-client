import { useGetBlogPostsQuery } from '@services/toolsApi';
import { Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import BlogCard from '@components/BlogCard/BlogCard';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@store/reducers/langSlice';
import SkeletonBlocks from '@components/SkeletonBlocks/SkeletonBlocks';

const BlogPosts = () => {
  const [limit, setLimit] = useState(18);
  const { language } = useSelector(selectLanguage);
  const [disableButton, setDisableButton] = useState(false);
  const { data: posts, isLoading } = useGetBlogPostsQuery({ limit, language });
  const { t } = useTranslation();

  const loadMoreClick = () => {
    setLimit((prev) => prev + 3);
  };

  useEffect(() => {
    posts?.next ? setDisableButton(false) : setDisableButton(true);
  }, [posts]);

  return (
    <>
      <Grid
        container
        margin="0 auto"
        maxWidth="lg"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        mb={4}
        data-testid="blog-posts-test"
      >
        {isLoading ? (
          <SkeletonBlocks />
        ) : (
          posts?.results?.map((post) => (
            <BlogCard
              slug={post.slug}
              key={post.id}
              id={post.id}
              date={post.created_at}
              image={post.image}
              title={post.title}
              body={post?.blog_body?.length > 0 ? post.blog_body[0].body : ''}
            />
          ))
        )}
      </Grid>
      <Box mb={4} textAlign="center">
        <LoadingButton
          data-testid="load-more-test"
          disabled={disableButton}
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={loadMoreClick}
        >
          {t('buttons.load_more')}
        </LoadingButton>
      </Box>
    </>
  );
};

export default BlogPosts;
