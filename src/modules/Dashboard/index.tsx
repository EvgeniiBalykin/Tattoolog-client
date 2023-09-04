import { Container } from '@mui/material';
import Cookies from 'js-cookie';
import { setUser } from 'modules/Login/features/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useProfileDataMutation } from 'services/authApi';
import ProfileCard from './components/ProfileCard';
import ProfileTabs from './components/ProfileTabs';

const Dashboard = () => {
  const token = Cookies.get('accessToken');
  const [getProfileData] = useProfileDataMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileData(token?.replace(/"/g, '')).then((response) => {
      if ('data' in response) {
        dispatch(setUser(response.data));
      } else {
        console.error('Error fetching profile data:', response.error);
      }
    });
  }, [token]);

  return (
    <Container sx={{ display: 'flex', height: '70vh', mb: 5 }}>
      <ProfileCard />
      <ProfileTabs />
    </Container>
  );
};

export default Dashboard;
