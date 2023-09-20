import { Container, Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { addChangeValue } from 'store/reducers/profileSlice';
import ProfilePortfolio from './ProfilePortfolio/ProfilePortfolio';

const Profile = () => {
  const { id } = useParams();
  const isEdit = useSelector(addChangeValue);

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        {isEdit ? <ProfileEdit id={Number(id)} /> : <ProfilePortfolio />}
      </Grid>
    </Container>
  );
};

export default Profile;
