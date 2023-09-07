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
import { About_Photo_1 } from 'images/index';
import { selectUser } from 'store/reducers/userSlice';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import { useGetProfileDataQuery } from 'services/profileApi';
import './ProfileCard.scss';
import { useDispatch } from 'react-redux';
import { toggleAddChange } from 'store/reducers/profileSlice';

const ProfileInfo: { title: string; value: number }[] = [
  { title: 'Followers', value: 0 },
  { title: 'Follows', value: 10 },
  { title: 'Tattoos', value: 20 },
];

const ProfileCard = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const onEditClick = () => {
    dispatch(toggleAddChange()); // Диспетчер action для изменения состояния
  };

  // const { id } = useParams();
  // const { data: profileData } = useGetProfileDataQuery(Number(id));

  // console.log(profileData)

  return (
    <Container className="container" maxWidth="xs" sx={{ height: '70vh' }}>
      <Card className="card">
        <CardContent className="card-content">
          <Avatar
            sx={{ width: 124, height: 124 }}
            alt={userData.first_name as string}
            src={About_Photo_1}
          />
          <Typography variant="h4">
            {userData.first_name} {userData.last_name}{' '}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            startIcon={<Edit />}
            fullWidth
            variant="outlined"
            color="primary"
            size="small"
            onClick={onEditClick}
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
