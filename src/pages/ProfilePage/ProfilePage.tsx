import { Container, Grid } from '@mui/material';
import { useParams } from 'react-router';
import { lazy, Suspense } from 'react';
import LoadingProcess from '@components/LoadingProcess/LoadingProcess';
import ProfileCard from '@components/Profile/ProfileCard/ProfileCard';
import transition from '@helpers/transitions/transitions';

const Profile = () => {
  const { id }: { id?: string } = useParams();
  const ProfilePortfolio = lazy(
    () => import('../../components/Profile/ProfilePortfolio/ProfilePortfolio')
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

export default transition(Profile);
