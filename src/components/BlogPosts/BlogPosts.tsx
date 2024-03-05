import {
  useGetBlogCategoriesQuery,
  useGetBlogPostsQuery,
} from '@services/toolsApi';
import { Grid, Box, Chip, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import BlogCard from '@components/BlogCard/BlogCard';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@store/reducers/langSlice';
import SkeletonBlocks from '@components/SkeletonBlocks/SkeletonBlocks';
import { getDomain } from '@helpers/getDomain';

const BlogPosts = () => {
  const [limit, setLimit] = useState(18);
  const { language } = useSelector(selectLanguage);
  const [disableButton, setDisableButton] = useState(false);
  const [category, setCategory] = useState('');
  const { data: posts, isLoading } = useGetBlogPostsQuery({
    limit,
    language,
    category,
    country: getDomain(),
  });
  const { data: blogCategories } = useGetBlogCategoriesQuery();
  const { t } = useTranslation();
  const postsByCountry = posts?.results;

  const loadMoreClick = () => {
    setLimit((prev) => prev + 3);
  };

  useEffect(() => {
    posts?.next ? setDisableButton(false) : setDisableButton(true);
  }, [posts]);

  return (
    <>
      <Stack direction="row" spacing={1} mb={2}>
        {blogCategories?.map((el) => (
          <Chip
            color={category === el.name ? 'primary' : 'default'}
            key={el.id}
            label={`#${el.name}`}
            onClick={() =>
              category === el.name ? setCategory('') : setCategory(el.name)
            }
          />
        ))}
      </Stack>

      <Grid
        container
        margin="0 auto"
        maxWidth="lg"
        justifyContent="start"
        alignItems="start"
        mb={4}
        data-testid="blog-posts-test"
      >
        {isLoading ? (
          <SkeletonBlocks />
        ) : (
          postsByCountry?.map((post) => (
            <BlogCard {...post} isBlogPost={true} category={post.category} />
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
