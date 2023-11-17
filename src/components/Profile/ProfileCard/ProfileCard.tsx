import {
  AddPhotoAlternate,
  Email,
  Facebook,
  Instagram,
  MusicNote,
  Phone,
  Pinterest,
  RemoveRedEye,
  Settings,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from '@services/profileApi';
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@store/reducers/userSlice';
import ModalDownload_v2 from '@components/ModalDownload_v2/ModalDownload_v2';
import { useTranslation } from 'react-i18next';
import UserRating from '@components/UserRating/UserRating';
import { Unknown_avatar } from '@images/index';
import { useNavigate } from 'react-router';

const SOCIAL_MEDIA_ICONS: { [key: string]: ReactElement } = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  TikTok: <MusicNote />,
  Pinterest: <Pinterest />,
};

const ProfileCard = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
            xs={1}
            md={1}
            key={socialMediaName}
          >
            <Tooltip title={link}>
              <IconButton target="_blank" href={link}>
                {icon}
              </IconButton>
            </Tooltip>
          </Grid>
        );
      }),
    [profileData?.social_media_profile]
  );

  const onEditClick = () => {
    navigate(`/profile/${id}/edit`);
  };

  const handleButtonClick = useCallback(
    () => fileInputRef.current && fileInputRef.current.click(),
    [fileInputRef]
  );

  useEffect(() => {
    if (selectedImg) {
      const formData = new FormData();
      formData.append('avatar', selectedImg);
      updateProfile({ id, formData }).then(() => refetch());
    }
  }, [selectedImg, id, updateProfile, refetch]);

  return (
    <Grid item xs={12} md={4} className="card-box">
      <Card className="card" sx={{ mb: 2 }}>
        <CardContent className="card-content">
          {userAccess && (
            <IconButton className="profile-settings" onClick={onEditClick}>
              <Settings />
            </IconButton>
          )}
          {userAccess && (
            <IconButton className="profile-views" onClick={onEditClick}>
              <RemoveRedEye />
              <Typography>{profileData?.count_visit}</Typography>
            </IconButton>
          )}
          <UserRating id={id} rating={Number(profileData?.average_rating)} />
          <CardMedia
            className="profile-avatar"
            component="img"
            src={profileData?.avatar ? profileData.avatar : Unknown_avatar}
            alt="avatar"
            loading="lazy"
          />
          {userAccess && (
            <Button
              className="change-avatar"
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleButtonClick}
            >
              {t('buttons.change_photo')}
            </Button>
          )}
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
            <Grid className="contact-item" item xs={1} md={1}>
              <Tooltip title={profileData?.phone_number}>
                <IconButton href={`tel:${profileData?.user?.username}`}>
                  <Phone />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid className="contact-item" item xs={1} md={1}>
              <Tooltip title={profileData?.user?.email}>
                <IconButton href={`mailto:${profileData?.user?.email}`}>
                  <Email />
                </IconButton>
              </Tooltip>
            </Grid>
            {renderSocialLinks}
          </Grid>
        </CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700}>
              {profileData?.user?.first_name} {profileData?.user?.last_name}
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              {profileData?.user?.role?.toUpperCase() === 'MASTER'
                ? 'ARTIST'
                : profileData?.user?.role?.toUpperCase()}
            </Typography>
            <Typography mt={1} variant="body2">
              {profileData?.city?.name &&
                `${profileData?.city?.name}, ${profileData?.country?.name}`}
            </Typography>
          </Box>
        </Box>
        <CardContent className="card-content">
          <Typography textAlign="justify" variant="h5">
            {profileData?.about}
          </Typography>
        </CardContent>
      </Card>
      <ModalDownload_v2 isOpen={isModal} toggle={toggleModal} />
      <Button
        startIcon={<AddPhotoAlternate />}
        fullWidth
        color="primary"
        variant="contained"
        size="large"
        onClick={toggleModal}
      >
        {t('buttons.add_work')}
      </Button>
    </Grid>
  );
};

export default ProfileCard;
