import { useGetBlogPostsQuery } from 'services/toolsApi';
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router';

const BlogPosts = () => {
  const { data: posts } = useGetBlogPostsQuery();
  const navigate = useNavigate();
  return (
    <Grid container margin="0 auto" gap={5} maxWidth="lg" mb={8}>
      {posts?.map((post) => (
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
  );
};

export default BlogPosts;
