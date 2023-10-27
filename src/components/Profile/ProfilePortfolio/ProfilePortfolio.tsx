import { Box, Grid, ImageList, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetProfilePortfolioQuery } from '@services/profileApi';
import PostCard from '@components/Profile/PostCard/PostCard';
import theme from '@ui/theme/theme';

const ProfilePortfolio = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: profilePortfolio } = useGetProfilePortfolioQuery(Number(id));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12} md={7} marginLeft={isMobile ? 0 : 4}>
      {profilePortfolio && profilePortfolio?.length > 0 ? (
        <Box minHeight="calc(100vh - 64px)">
          <Box sx={{ width: '100%', height: '100vh', overflowY: 'scroll' }}>
            <ImageList
              variant="masonry"
              cols={isMobile ? 1 : 3}
              gap={5}
              sx={{ padding: 1 }}
            >
              {profilePortfolio?.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </ImageList>
          </Box>
        </Box>
      ) : (
        <Typography textAlign="center" width="100%" sx={{}}>
          {t('pages.no_works')}
        </Typography>
      )}
    </Grid>
  );
};

export default ProfilePortfolio;
