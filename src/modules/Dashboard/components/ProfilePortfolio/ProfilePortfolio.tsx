import { Box, ImageList } from '@mui/material';
import { useGetProfilePortfolioQuery } from 'services/profileApi';
import PostCard from './PostCard';

const ProfilePortfolio = () => {
  const { data: profilePortfolio } = useGetProfilePortfolioQuery(null);

  return (
    <Box sx={{ width: '100%', height: '70vh', overflowY: 'scroll' }}>
      {profilePortfolio && (
        <ImageList variant="masonry" cols={3} gap={5}>
          {profilePortfolio?.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default ProfilePortfolio;
