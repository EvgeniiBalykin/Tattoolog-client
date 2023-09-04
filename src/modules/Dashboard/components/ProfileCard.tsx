import { AddPhotoAlternate, Edit } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import { selectUser } from 'modules/Login/features/userSlice';
import { useSelector } from 'react-redux';
import './ProfileCard.scss';

const ProfileInfo: { title: string; value: number }[] = [
  { title: 'Followers', value: 0 },
  { title: 'Follows', value: 10 },
  { title: 'Tattoos', value: 20 },
];

const ProfileCard = () => {
  const userData = useSelector(selectUser);
  return (
    <Container className="container" maxWidth="xs">
      <Card className="card">
        <CardContent className="card-content">
          <Avatar alt="User Photo" />
          <Typography variant="h4">
            {userData.first_name} {userData.last_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            startIcon={<Edit />}
            fullWidth
            variant="contained"
            color="primary"
            size="small"
          >
            Edit Profile
          </Button>
        </CardActions>
        <CardActions>
          <Button
            startIcon={<AddPhotoAlternate />}
            fullWidth
            variant="outlined"
            size="small"
          >
            Add Photo
          </Button>
        </CardActions>
        {ProfileInfo.map((el, i) => (
          <CardContent key={i} sx={{ padding: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="subtitle1">{el.title}:</Typography>
              <Typography variant="subtitle1">{el.value}</Typography>
            </Box>
          </CardContent>
        ))}
      </Card>
    </Container>
  );
};

export default ProfileCard;
