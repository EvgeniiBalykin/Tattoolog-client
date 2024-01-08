import { IProfileData } from '@interfaces/index';
import { Facebook, Instagram, MusicNote, Pinterest } from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { ReactElement } from 'react';

const SOCIAL_MEDIA_ICONS: { [key: string]: ReactElement } = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  TikTok: <MusicNote />,
  Pinterest: <Pinterest />,
};

const ProfileSocial = ({ profileData }: { profileData: IProfileData }) => {
  const { social_media_profile } = profileData || {};

  return (
    <>
      {social_media_profile?.map((profileLink) => (
        <Grid
          className="contact-item"
          item
          xs={1}
          md={1}
          key={profileLink.social_media_type.name}
        >
          <Tooltip title={profileLink.link}>
            <IconButton target="_blank" href={profileLink.link}>
              {SOCIAL_MEDIA_ICONS[profileLink.social_media_type.name]}
            </IconButton>
          </Tooltip>
        </Grid>
      ))}
    </>
  );
};

export default ProfileSocial;
