import { AddPhotoAlternate, Edit } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { selectUser } from 'modules/Login/features/userSlice';
import { useSelector } from 'react-redux';

const ProfileInfo: { title: string; value: number }[] = [
  { title: 'Followers', value: 0 },
  { title: 'Follows', value: 10 },
  { title: 'Tattoos', value: 20 },
];

const ProfileCard = () => {
  const userData = useSelector(selectUser);
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '35%',
        height: '70vh',
      }}
    >
      <CardContent>
        <Avatar
          alt="User Photo"
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
      </CardContent>
      <CardContent>
        <Typography>
          {userData.first_name} {userData.last_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<Edit />}
          fullWidth
          variant="contained"
          color="primary"
        >
          Edit Profile
        </Button>
      </CardActions>
      <CardActions>
        <Button startIcon={<AddPhotoAlternate />} fullWidth variant="outlined">
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
  );
};

export default ProfileCard;
