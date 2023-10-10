import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useNavigate } from 'react-router';
import './CatalogCard.scss';
import BasicRating from '../UserRating';

interface ICatalogCardProps {
  firstName: string;
  lastName: string;
  id: number;
  avatar: string;
  city: string;
  country: string;
}

const CatalogCard = ({
  firstName,
  lastName,
  id,
  avatar,
  city,
  country,
}: ICatalogCardProps) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} data-testid="catalog-card-test">
      <Card className="catalog-card">
        <CardActionArea
          data-testid="card-action-test"
          className="catalog-card-content"
          onClick={() => navigate(`/profile/${id}`)}
        >
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={avatar}
            alt="avatar-img"
          />
          <div className="catalog-card-text">
            <BasicRating readOnly />
            <Typography variant="h3">
              {firstName} {lastName}
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
