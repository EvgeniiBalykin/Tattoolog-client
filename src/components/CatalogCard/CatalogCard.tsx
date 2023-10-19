import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useNavigate } from 'react-router';
import './CatalogCard.scss';
import UserRating from '@components/UserRating/UserRating';
import { useMemo } from 'react';
import { trimText } from '@helpers/trimText/trimText';
import { Unknown_avatar } from '@images/index';

interface ICatalogCardProps {
  firstName: string;
  lastName: string;
  id: number;
  avatar: string;
  city: string;
  country: string;
  about: string;
  avg_rating: string;
}

const CatalogCard = ({
  firstName,
  lastName,
  id,
  avatar,
  city,
  country,
  about,
  avg_rating,
}: ICatalogCardProps) => {
  const navigate = useNavigate();
  const textLengthLimit = 100;
  const trimedText = useMemo(
    () => trimText(about, textLengthLimit),
    [about, textLengthLimit]
  );

  return (
    <Grid item xs={12} sm={6} md={4} data-testid="catalog-card-test">
      <Card className="catalog-card">
        <CardActionArea
          data-testid="card-action-test"
          className="catalog-card-content"
          onClick={() => navigate(`/profile/${id}`)}
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: 'rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={avatar ? avatar : Unknown_avatar}
            alt="avatar-img"
          />
          <div className="catalog-card-text">
            <UserRating readOnly rating={Number(avg_rating)} />
            <Typography variant="h3">
              {firstName} {lastName}
            </Typography>
            <Typography
              variant="h4"
              textAlign="justify"
              padding={3}
              data-testid="card-about"
            >
              {trimedText}
            </Typography>
            <Typography variant="h5">
              {country ? `${country},` : ''} {city}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CatalogCard;
