import { useGetBlogPostsQuery } from '@services/toolsApi';
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Box,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { trimText } from '@helpers/trimText/trimText';

const BlogPosts = () => {
  const [limit, setLimit] = useState(6);
  const [desableButton, setDisableButton] = useState(false);
  const { data: posts, isLoading } = useGetBlogPostsQuery(limit);
  const navigate = useNavigate();
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
          <Grid
            key={post.id}
            item
            lg={4}
            md={5}
            mb={2}
            data-testid="post-item-test"
          >
            <Card sx={{ maxWidth: 350, maxHeight: 350, height: '100%' }}>
              <CardMedia sx={{ height: 140 }} image={post.image} />
              <CardContent>
                <Typography variant="h6" color="grey" mb={2} textAlign="end">
                  {moment(post.created_at).format('YYYY/MM/DD hh:mm')}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  textAlign="justify"
                  component="div"
                >
                  {post.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {trimText(post.body, 150)}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button
                  size="small"
                  fullWidth
                  onClick={() => navigate(`/post/${post.id}`)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
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
