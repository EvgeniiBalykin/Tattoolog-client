import { trimText } from '@helpers/trimText/trimText';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
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
  date: Date;
  title: string;
  body: string;
  slug: string;
  isBlogPost: boolean;
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  image,
  date,
  title,
  body,
  slug,
  isBlogPost,
}) => {
  const navigate = useNavigate();
  const { language } = useSelector(selectLanguage);

  return (
    <Grid key={id} item lg={4} md={5} mb={2} data-testid="post-item-test">
      <Card className="post-card" sx={{ backgroundImage: `url(${image})` }}>
        <CardContent className="post-card-content">
          <Typography variant="h6" className="post-date" textAlign="end">
            {moment(date).format('YYYY/MM/DD hh:mm')}
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
            dangerouslySetInnerHTML={{ __html: trimText(body, 250) }}
          />
        </CardContent>
        <CardActions className="post-card-actions">
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={() =>
              isBlogPost ? navigate(`${slug}/${language}`) : navigate(`${slug}`)
            }
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogCard;
