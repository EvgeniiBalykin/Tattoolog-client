import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { addChangeValue } from 'store/reducers/profileSlice';
import ProfileCard from './components/ProfileCard';
import ProfileTabs from './components/ProfileTabs';

const Dashboard = () => {
  const isEdit = useSelector(addChangeValue);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', height: '80vh', mb: 5, mt: 5 }}
    >
      <ProfileCard />
      {!isEdit ? <ProfileTabs /> : 'HOLLA'}
    </Container>
  );
};

export default Dashboard;
