import { Box, ImageList } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProfilePortfolioQuery } from 'services/profileApi';
import PostCard from '../../PostCard/PostCard';

const ProfilePortfolio = () => {
  const { data: profilePortfolio } = useGetProfilePortfolioQuery(null);
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
    <Box sx={{ width: '100%', height: '70vh', overflowY: 'scroll' }}>
      {profilePortfolio && (
        <ImageList variant="masonry" cols={isMobileScreen ? 1 : 3} gap={5}>
          {profilePortfolio?.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default ProfilePortfolio;
