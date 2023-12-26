import { AddPhotoAlternate, Email, Phone, Settings } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import './ProfileCard.scss';
import {
  useGetProfileDataQuery,
  useGetProfilePortfolioQuery,
} from '@services/profileApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@store/reducers/userSlice';
import UploadWorks from '@components/UploadWorks/UploadWorks';
import { useTranslation } from 'react-i18next';
import UserRating from '@components/UserRating/UserRating';
import { CrownIconImg, UnknownAvatarImg } from '@images/index';
import { useNavigate } from 'react-router';
import { IProfileData } from '@interfaces/index';
import ChangePhotoBtn from '../ChangePhotoBtn/ChangePhotoBtn';
import CheckboxStatus from '../CheckboxStatus/CheckboxStatus';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import LoadingProcess from '@components/LoadingProcess/LoadingProcess';

const ProfileCard = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: profileData, refetch } = useGetProfileDataQuery(id);
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal((prev) => !prev);
  const { id: storeId } = useSelector(selectUser);
  const userAccess = id === storeId;
  const { data: profilePortfolio } = useGetProfilePortfolioQuery(id);
  const countPosts = profilePortfolio?.length;

  if (!profileData) return <LoadingProcess />;

  const {
    count_visit,
    user,
    city,
    country,
    about,
    avatar,
    average_rating,
    moderation_profile_associate,
  }: IProfileData = profileData;
  const isProAccount = moderation_profile_associate?.some(
    (el) => el.status === 'approved'
  );

  const onEditClick = () => {
    navigate(`/profile/${id}/edit`);
  };

  const formatCountViews = (value: number = 0) => {
    const suffixes = ['', 'к', 'м'];

    let suffixIndex = 0;
    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
      value /= 1000;
      suffixIndex++;
    }

    return value.toFixed(1).replace(/\.0$/, '') + suffixes[suffixIndex];
  };

  return (
    <Grid item xs={12} md={4} className="card-box">
      <Card className="card" sx={{ mb: 2 }}>
        <div className="profile-settings">
          {isProAccount ? (
            <>
              <div className="premium-icon">
                <img src={CrownIconImg} />
              </div>
              <div className="associate-name">
                <Typography variant="body1" color="#c7a560">
                  Member of{' '}
                  {moderation_profile_associate &&
                    moderation_profile_associate[0]?.type?.name}
                </Typography>
              </div>
            </>
          ) : (
            <></>
          )}
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
        <CardContent className="card-content">
          <div className="profile-tools">
            {userAccess && (
              <Box className="profile-views">
                <Typography>{formatCountViews(count_visit)}</Typography>
                <Typography variant="body2" color="#848590">
                  Views
                </Typography>
              </Box>
            )}
            <div className="avatar-block">
              <CardMedia
                className="profile-avatar"
                component="img"
                src={avatar ? avatar : UnknownAvatarImg}
                sx={{ width: '13rem', height: '13rem' }}
                alt="avatar"
                loading="lazy"
              />
              {userAccess && <ChangePhotoBtn id={id} refetch={refetch} />}
            </div>
            {userAccess && (
              <Box className="profile-views">
                <Typography>{formatCountViews(countPosts)}</Typography>
                <Typography variant="body2" color="#848590">
                  Posts
                </Typography>
              </Box>
            )}
          </div>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box textAlign="center">
              <Typography variant="h4" fontWeight={700}>
                {user?.first_name} {user?.last_name}
              </Typography>
              <Typography mt={1} variant="body2">
                {city?.name && `${city?.name}, ${country?.name}`}
              </Typography>
            </Box>
          </Box>
          <UserRating id={id} rating={Number(average_rating)} />
          <Box display="flex" width={400} gap={2}>
            <Button variant="outlined" fullWidth href={`tel:${user.username}`}>
              <Phone sx={{ marginRight: 1 }} />
              Call now
            </Button>
            <Button variant="outlined" fullWidth href={`mailto:${user.email}`}>
              <Email sx={{ marginRight: 1 }} />
              Message
            </Button>
          </Box>
        </CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <CheckboxStatus
            id={id}
            isMentor={profileData.mentor || false}
            openToWork={profileData.open_to_work || false}
            isRelocate={profileData.relocate || false}
            userAccess={userAccess}
          />
        </Box>
        {about && (
          <CardContent className="card-content about">
            <Typography textAlign="justify" variant="h5">
              {about}
            </Typography>
          </CardContent>
        )}
        <Grid
          mt={2}
          className="contacts-wrapper"
          container
          gap={2}
          justifyContent="center"
        >
          <ProfileLinks profileData={profileData} />
        </Grid>
        <Box width={300} margin="40px auto">
          {userAccess && (
            <Button
              startIcon={<AddPhotoAlternate />}
              fullWidth
              color="inherit"
              variant="contained"
              size="large"
              onClick={toggleModal}
            >
              {t('buttons.add_work')}
            </Button>
          )}
        </Box>
      </Card>
      <UploadWorks isOpen={isModal} toggle={toggleModal} />
    </Grid>
  );
};

export default ProfileCard;
