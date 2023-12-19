import {
  AddPhotoAlternate,
  RemoveRedEye,
  Settings,
  WorkspacePremiumSharp,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  IconButton,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import { useGetProfileDataQuery } from '@services/profileApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@store/reducers/userSlice';
import ModalDownload_v2 from '@components/UploadWorks/UploadWorks';
import { useTranslation } from 'react-i18next';
import UserRating from '@components/UserRating/UserRating';
import { UnknownAvatarImg } from '@images/index';
import { useNavigate } from 'react-router';
import { IProfileData } from '@interfaces/index';
import ChangePhotoBtn from '../ChangePhotoBtn/ChangePhotoBtn';
import CheckboxStatus from '../CheckboxStatus/CheckboxStatus';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const ProfileCard = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: profileData, refetch } = useGetProfileDataQuery(id);
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal((prev) => !prev);
  const { id: storeId } = useSelector(selectUser);
  const userAccess = id === storeId;
  const {
    count_visit,
    user,
    city,
    country,
    about,
    avatar,
    average_rating,
    moderation_profile_associate,
  }: IProfileData = profileData || {};

  const onEditClick = () => {
    navigate(`/profile/${id}/edit`);
  };

  return (
    <Grid item xs={12} md={4} className="card-box">
      <Card className="card" sx={{ mb: 2 }}>
        {moderation_profile_associate?.some(
          (el) => el.status === 'approved'
        ) ? (
          <div className="association-icon">
            <Icon className="icon" color="warning">
              <WorkspacePremiumSharp />
            </Icon>
            <Typography variant="body1" color="CaptionText">
              Member of {moderation_profile_associate[0]?.type?.name}
            </Typography>
          </div>
        ) : (
          ''
        )}
        <CardContent className="card-content">
          <div className="profile-tools">
            {userAccess && (
              <Box className="profile-views">
                <RemoveRedEye />
                <Typography>{count_visit}</Typography>
              </Box>
            )}
            <UserRating id={id} rating={Number(average_rating)} />
            {userAccess && (
              <IconButton
                name="profile-settings"
                className="profile-settings"
                onClick={onEditClick}
              >
                <Settings />
              </IconButton>
            )}
          </div>
          <div className="avatar-block">
            <CardMedia
              className="profile-avatar"
              component="img"
              src={avatar ? avatar : UnknownAvatarImg}
              alt="avatar"
              loading="lazy"
            />
            {userAccess && <ChangePhotoBtn id={id} refetch={refetch} />}
          </div>
          <Grid
            className="contacts-wrapper"
            container
            gap={2}
            justifyContent="center"
          >
            <ProfileLinks profileData={profileData} />
          </Grid>
        </CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <CheckboxStatus
            id={id}
            profileData={profileData}
            userAccess={userAccess}
          />
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700}>
              {user?.first_name} {user?.last_name}
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              {user?.role?.toUpperCase() === 'MASTER'
                ? 'ARTIST'
                : user?.role?.toUpperCase()}
            </Typography>
            <Typography mt={1} variant="body2">
              {city?.name && `${city?.name}, ${country?.name}`}
            </Typography>
          </Box>
        </Box>
        <CardContent className="card-content">
          <Typography textAlign="justify" variant="h5">
            {about}
          </Typography>
        </CardContent>
      </Card>
      <ModalDownload_v2 isOpen={isModal} toggle={toggleModal} />
      {userAccess && (
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
      )}
    </Grid>
  );
};

export default ProfileCard;
