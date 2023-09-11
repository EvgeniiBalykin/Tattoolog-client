import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { addChangeValue } from 'store/reducers/profileSlice';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProfileTabs from './components/ProfileTabs/ProfileTabs';
import { useParams } from 'react-router';

const Profile = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        <ProfileTabs />
      </Grid>
    </Container>
  );
};

export default Profile;
