import { Container, Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { useParams } from 'react-router';
import { lazy, Suspense } from 'react';
import LoadingProcess from '@components/LoadingProcess/LoadingProcess';

const Profile = () => {
  const { id }: { id?: string } = useParams();
  const ProfilePortfolio = lazy(
    () => import('./ProfilePortfolio/ProfilePortfolio')
  );

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        <Suspense fallback={<LoadingProcess />}>
          <ProfilePortfolio />
        </Suspense>
      </Grid>
    </Container>
  );
};

export default Profile;
