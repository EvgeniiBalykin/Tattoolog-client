import { trimText } from '@helpers/trimText/trimText';
import { IBlogCategorie } from '@interfaces/index';
import {
  Box,
  Button,
  Card,
  CardActions,
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
  body: string;
  slug: string;
  isBlogPost: boolean;
  category?: IBlogCategorie[];
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  image,
  created_at,
  title,
  body,
  slug,
  isBlogPost,
  category,
}) => {
  const navigate = useNavigate();
  const { language } = useSelector(selectLanguage);

  return (
    <Grid key={id} item lg={4} md={5} mb={2} data-testid="post-item-test">
      <Card className="post-card" sx={{ backgroundImage: `url(${image})` }}>
        <CardContent className="post-card-content">
          <Typography variant="h6" className="post-date" textAlign="end">
            {moment(created_at).format('YYYY/MM/DD hh:mm')}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            className="post-title"
            component="div"
          >
            {title.toUpperCase()}
          </Typography>
          <Box
            mt={3}
            sx={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: trimText(body, 150) }}
          />
        </CardContent>
        <CardActions className="post-card-actions">
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
        </CardActions>
        {isBlogPost ? (
          <Stack direction="row" spacing={1} zIndex={1} m={1}>
            {category?.map((el) => (
              <Chip key={el.id} label={`#${el.name}`} />
            ))}
          </Stack>
        ) : (
          ''
        )}
      </Card>
    </Grid>
  );
};

export default BlogCard;
