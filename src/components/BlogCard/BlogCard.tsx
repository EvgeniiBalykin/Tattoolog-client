import { IBlogCategorie } from '@interfaces/index';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { selectLanguage } from '@store/reducers/langSlice';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './BlogCard.scss';

export interface IBlogCard {
  id: number;
  image: string;
  created_at: Date;
  title: string;
  slug: string;
  isBlogPost: boolean;
  category?: IBlogCategorie[];
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  image,
  created_at,
  title,
  slug,
  isBlogPost,
  category,
}) => {
  const navigate = useNavigate();
  const { language } = useSelector(selectLanguage);

  return (
    <Grid key={id} item lg={4} md={5} mb={2} data-testid="post-item-test">
      <Card className="post-card" sx={{ backgroundImage: `url(${image})` }}>
        <CardContent
          className="post-card-content"
          sx={{ position: 'relative', zIndex: 1, color: 'white' }}
        >
          <Typography variant="h6" mb={2} textAlign="end">
            {moment(created_at).format('YYYY/MM/DD hh:mm')}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            fontStyle="italic"
            fontWeight="bold"
            color="lightgray"
            textAlign="center"
            mb={1}
            mt={12}
            // className="post-title"
            component="div"
          >
            {title.toUpperCase()}
          </Typography>
          {/* <Box
            mt={3}
            sx={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: trimText(body, 150) }}
          /> */}
        </CardContent>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {isBlogPost ? (
            <Stack direction="row" spacing={1} zIndex={1} m={1}>
              {category?.map((el) => (
                <Chip key={el.id} label={`#${el.name}`} />
              ))}
            </Stack>
          ) : (
            ''
          )}
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={() =>
              isBlogPost
                ? navigate(`${slug}/${language}`)
                : navigate(`/festival/${slug}`)
            }
          >
            Learn More
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default BlogCard;
