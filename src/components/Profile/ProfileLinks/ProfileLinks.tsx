import { IProfileData } from '@interfaces/index';
import {
  Email,
  Facebook,
  Instagram,
  MusicNote,
  Phone,
  Pinterest,
} from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { ReactElement } from 'react';

const SOCIAL_MEDIA_ICONS: { [key: string]: ReactElement } = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  TikTok: <MusicNote />,
  Pinterest: <Pinterest />,
};

const ProfileLinks = ({
  profileData,
}: {
  profileData: IProfileData | undefined;
}) => {
  const { social_media_profile, user, phone_number } = profileData || {};

  return (
    <>
      <Grid className="contact-item" item xs={1} md={1}>
        <Tooltip title={phone_number}>
          <IconButton href={`tel:${user?.username}`}>
            <Phone />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid className="contact-item" item xs={1} md={1}>
        <Tooltip title={user?.email}>
          <IconButton href={`mailto:${user?.email}`}>
            <Email />
          </IconButton>
        </Tooltip>
      </Grid>
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

export default ProfileLinks;
