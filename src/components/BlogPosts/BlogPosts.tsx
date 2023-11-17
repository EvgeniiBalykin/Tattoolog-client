import { useGetBlogPostsQuery } from '@services/toolsApi';
import { Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import PostCard from '@components/PostCard/PostCard';

const BlogPosts = () => {
  const [limit, setLimit] = useState(6);
  const [desableButton, setDisableButton] = useState(false);
  const { data: posts, isLoading } = useGetBlogPostsQuery(limit);
  const { t } = useTranslation();

  const loadMoreClick = () => {
    setLimit((prev) => prev + 3);
  };

  useEffect(() => {
    posts?.next === null && setDisableButton(true);
  }, [posts]);

  return (
    <>
      <Grid
        container
        margin="0 auto"
        justifyContent="space-around"
        maxWidth="lg"
        mb={4}
        data-testid="blog-posts-test"
      >
        {posts?.results.map((post) => (
          <PostCard
            slug={post.slug}
            key={post.id}
            id={post.id}
            date={post.created_at}
            image={post.image}
            title={post.title}
            body={post.body}
          />
        ))}
      </Grid>
      <Box mb={4} display="flex" justifyContent="center">
        <LoadingButton
          data-testid="load-more-test"
          disabled={desableButton}
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
