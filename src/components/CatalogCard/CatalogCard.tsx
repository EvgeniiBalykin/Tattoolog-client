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
}

const CatalogCard = ({
  firstName,
  lastName,
  id,
  avatar,
}: ICatalogCardProps) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="catalog-card">
        <CardActionArea
          className="catalog-card-content"
          onClick={() => navigate(`/profile/${id}`)}
        >
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={avatar}
          />
          <div className="catalog-card-text">
            <BasicRating readOnly />
            <Typography variant="h3">
              {firstName} {lastName}
            </Typography>
            <Typography variant="h5">Poland, Krakow</Typography>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CatalogCard;
