import { trimText } from '@helpers/trimText/trimText';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router';
import './PostCard.scss';

export interface IPostCard {
  id: number;
  image: string;
  date: Date;
  title: string;
  body: string;
  slug: string;
}

const PostCard: React.FC<IPostCard> = ({
  id,
  image,
  date,
  title,
  body,
  slug,
}) => {
  const navigate = useNavigate();

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
          <Typography className="post-body" textAlign="center">
            {trimText(body, 130)}
          </Typography>
        </CardContent>
        <CardActions className="post-card-actions">
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={() => navigate(`${slug}/${id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostCard;
