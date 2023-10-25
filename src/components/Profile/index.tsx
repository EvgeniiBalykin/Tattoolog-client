import { Container, Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { useParams } from 'react-router';
import ProfilePortfolio from './ProfilePortfolio/ProfilePortfolio';

const Profile = () => {
  const { id }: { id?: string } = useParams();

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        <ProfilePortfolio />
      </Grid>
    </Container>
  );
};

export default Profile;
