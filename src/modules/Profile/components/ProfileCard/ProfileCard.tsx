import { AddPhotoAlternate, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import { useDispatch } from 'react-redux';
import { toggleAddChange } from 'store/reducers/profileSlice';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from 'services/profileApi';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ModalDownload from 'components/ModalDownload/ModalDownload';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/reducers/userSlice';

// To fix: Доделать иправление профиля, когда будет дизайн

const ProfileCard = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const { data: profileData, refetch } = useGetProfileDataQuery(id);
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal((prev) => !prev);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [updateProfile] = useUpdateProfileMutation();
  const { id: storeId } = useSelector(selectUser);
  const userAccess = id === storeId;

  const onEditClick = () => {
    dispatch(toggleAddChange());
  };

  const handleButtonClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  useEffect(() => {
    if (selectedImg) {
      const formData = new FormData();
      formData.append('avatar', selectedImg);
      formData.append(
        'about',
        'Hello Hello lol lo lo lo lo lol ololol ololol olo lol olol olol ol ol po po po po po po po '
      );
      updateProfile({ id, formData }).then(() => refetch());
    }
  }, [selectedImg]);

  return (
    <Grid item xs={12} md={4} className="card-box">
      <Card className="card">
        <CardContent className="card-content">
          <CardMedia
            component="img"
            src={profileData?.avatar}
            alt="avatar"
            sx={{ height: 150, width: 150, borderRadius: '20px' }}
          />
          <input
            accept="image/*"
            type="file"
            id="select-image"
            ref={fileInputRef}
            style={{ display: 'none' }}
            multiple
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSelectedImg(e.target.files && e.target.files[0])
            }
          />
          {userAccess && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Upload Images
            </Button>
          )}
          <Box display="flex" justifyContent="space-around" width="100%">
            <Typography variant="h4">
              {profileData?.user?.first_name} {profileData?.user?.last_name}
            </Typography>
          </Box>
        </CardContent>
        {userAccess && (
          <>
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
                onClick={toggleModal}
              >
                Add Photo
              </Button>
            </CardActions>
          </>
        )}
        <CardContent className="card-content">
          <Typography textAlign="justify" variant="body2">
            {profileData?.about}
          </Typography>
        </CardContent>
      </Card>
      <ModalDownload isOpen={isModal} toggle={toggleModal} />
    </Grid>
  );
};

export default ProfileCard;
