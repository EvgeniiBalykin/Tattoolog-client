import { Container, Grid } from '@mui/material';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProfileTabs from './components/ProfileTabs/ProfileTabs';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import { addChangeValue } from 'store/reducers/profileSlice';

const Profile = () => {
  const { id } = useParams();
  const isEdit = useSelector(addChangeValue);

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        <ProfileEdit />
        {/* {isEdit ? <ProfileEdit /> : <ProfileTabs />} */}
      </Grid>
    </Container>
  );
};

export default Profile;
