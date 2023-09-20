import { Box, Grid, ImageList } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useGetProfilePortfolioQuery } from 'services/profileApi';
import PostCard from '../PostCard/PostCard';

const ProfilePortfolio = () => {
  const { id } = useParams();
  const { data: profilePortfolio } = useGetProfilePortfolioQuery(Number(id));
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid item xs={12} md={8}>
      <Box minHeight="calc(100vh - 64px)" sx={{ paddingLeft: '10px' }}>
        <Box sx={{ width: '100%', height: '70vh', overflowY: 'scroll' }}>
          {profilePortfolio && (
            <ImageList variant="masonry" cols={isMobileScreen ? 1 : 3} gap={5}>
              {profilePortfolio?.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </ImageList>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfilePortfolio;
