import { useGetBlogPostsQuery } from 'services/toolsApi';
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';

const BlogPosts = () => {
  const [limit, setLimit] = useState(6);
  const [desableButton, setDisableButton] = useState(false);
  const { data: posts, isLoading } = useGetBlogPostsQuery(limit);
  const navigate = useNavigate();

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
        gap={5}
        maxWidth="lg"
        mb={4}
      >
        {posts?.results.map((post) => (
          <Grid key={post.id} item md={3}>
            <Card>
              <CardActionArea onClick={() => navigate(`/post/${post.id}`)}>
                <CardContent>
                  <Typography variant="h3" textAlign="center">
                    {post.title.toUpperCase()}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mb={4} display="flex" justifyContent="center">
        <LoadingButton
          disabled={desableButton}
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={loadMoreClick}
        >
          Load more
        </LoadingButton>
      </Box>
    </>
  );
};

export default BlogPosts;
