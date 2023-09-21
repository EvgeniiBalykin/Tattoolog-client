import { Container, Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { addChangeValue } from 'store/reducers/profileSlice';
import ProfilePortfolio from './ProfilePortfolio/ProfilePortfolio';
import { selectUser } from 'store/reducers/userSlice';

const Profile = () => {
  const { id }: { id?: string } = useParams();
  const isEdit = useSelector(addChangeValue);
  const { id: UserId } = useSelector(selectUser);

  return (
    <Container maxWidth="xl">
      <Grid container flexWrap="wrap">
        <ProfileCard id={Number(id)} />
        {isEdit && Number(id) === UserId ? (
          <ProfileEdit id={Number(id)} />
        ) : (
          <ProfilePortfolio />
        )}
      </Grid>
    </Container>
  );
};

export default Profile;
