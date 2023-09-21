import {
  AddPhotoAlternate,
  Edit,
  Email,
  Facebook,
  Instagram,
  MusicNote,
  Phone,
  Pinterest,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import { useDispatch } from 'react-redux';
import { toggleAddChange } from 'store/reducers/profileSlice';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from 'services/profileApi';
import {
  ChangeEvent,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ModalDownload from 'components/ModalDownload/ModalDownload';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/reducers/userSlice';

// To fix: Доделать иправление профиля, когда будет дизайн

const SOCIAL_MEDIA_ICONS: { [key: string]: ReactElement } = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  TikTok: <MusicNote />,
  Pinterest: <Pinterest />,
};

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
  const renderSocialLinks = useMemo(
    () =>
      profileData?.social_media_profile?.map((socialMedia) => {
        const { link, social_media_type } = socialMedia;
        const socialMediaName = social_media_type.name;
        const icon = SOCIAL_MEDIA_ICONS[socialMediaName];

        return (
          <Grid
            className="contact-item"
            item
            xs={5}
            md={5}
            key={socialMediaName}
          >
            <IconButton>{icon}</IconButton>
            <Typography variant="body2" fontWeight={300}>
              {link}
            </Typography>
          </Grid>
        );
      }),
    [profileData?.social_media_profile]
  );

  const onEditClick = () => {
    dispatch(toggleAddChange());
  };

  const handleButtonClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  useEffect(() => {
    if (selectedImg) {
      const formData = new FormData();
      formData.append('avatar', selectedImg);
      updateProfile({ id, formData }).then(() => refetch());
    }
  }, [selectedImg]);

  return (
    <Grid item xs={12} md={4} className="card-box">
      <Card className="card">
        <CardContent className="card-content">
          <Box className="name-box">
            <Box display="flex" flexDirection="column" gap={1}>
              <Box>
                <Typography variant="h5">
                  {profileData?.user?.first_name?.toUpperCase()}{' '}
                  {profileData?.user?.last_name?.toUpperCase()}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={300}>
                  {profileData?.user?.role?.toUpperCase()}
                </Typography>
              </Box>
            </Box>
            {userAccess && (
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleButtonClick}
              >
                Change photo
              </Button>
            )}
          </Box>
          <CardMedia
            component="img"
            src={profileData?.avatar}
            alt="avatar"
            sx={{ height: 250, width: 250, borderRadius: '20px' }}
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
          <Grid
            className="contacts-wrapper"
            container
            gap={2}
            justifyContent="center"
          >
            <Grid className="contact-item" item xs={5} md={5}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="body2" fontWeight={300}>
                {profileData?.phone_number}
              </Typography>
            </Grid>
            <Grid className="contact-item" item xs={5} md={5}>
              <IconButton>
                <Email />
              </IconButton>
              <Typography variant="body2" fontWeight={300}>
                {profileData?.user?.email}
              </Typography>
            </Grid>
            {renderSocialLinks}
          </Grid>
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
            {profileData?.city}
            {profileData?.country}
          </Typography>
        </CardContent>
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
