import { Box, Button, Typography } from '@mui/material';
import { useAppDiscpatch, useAppSelector } from 'hooks/redux';
import { logoutUser, selectLogin } from 'modules/Login/features/loginSlice';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useTranslation();
  const { name } = useAppSelector(selectLogin);
  const dispatch = useAppDiscpatch();
  const logOutClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        {t('registration.welcome')}: {name}
      </Typography>
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: 3 }}
        onClick={logOutClick}
      >
        {t('registration.logout')}
      </Button>
    </Box>
  );
};

export default Dashboard;
