import { AddPhotoAlternate, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Input,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import { useDispatch } from 'react-redux';
import { addChangeValue, toggleAddChange } from 'store/reducers/profileSlice';
import { useGetProfileDataQuery } from 'services/profileApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';

interface IEditState {
  firstName?: string;
  lastName?: string;
  about?: string;
}

const ProfileInfo: { title: string; value: number }[] = [
  { title: 'Followers', value: 0 },
  { title: 'Follows', value: 10 },
  { title: 'Tattoos', value: 20 },
];

const ProfileCard = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector(addChangeValue);
  const { data: profileData } = useGetProfileDataQuery(id);
  const [editFields, setEditFields] = useState<IEditState>({
    firstName: profileData?.user.first_name,
    lastName: profileData?.user.last_name,
    about: profileData?.about,
  });

  const onEditClick = () => {
    dispatch(toggleAddChange());
  };

  return (
    <Grid item xs={12} md={3} className="card-box">
      <Card className="card">
        <CardContent className="card-content">
          <CardMedia
            component="img"
            src={profileData?.avatar}
            sx={{ height: 240, width: '100%', borderRadius: '20px' }}
          />
          {isEdit ? (
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={profileData?.user.first_name}
            />
          ) : (
            <Box display="flex" justifyContent="space-around" width="100%">
              <Typography variant="h4">
                {profileData?.user.first_name}
              </Typography>
              <Typography variant="h4">
                {profileData?.user.last_name}
              </Typography>
            </Box>
          )}
          {isEdit ? (
            <TextField
              id="filled-multiline-flexible"
              value={profileData?.about}
              multiline
            />
          ) : (
            <Typography textAlign="justify" variant="body2">
              {profileData?.about}
            </Typography>
          )}
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
    </Grid>
  );
};

export default ProfileCard;
