import transition from '@helpers/transitions/transitions';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AcceptSignupPage = () => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h5" gutterBottom>
        {t('registration.check_spam')}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {t('registration.make_access')}
      </Typography>
      {/* <Typography variant="h6" color="grey" textAlign="center">
        *{t('registration.check_spam')}
      </Typography> */}
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: 3 }}
      >
        {t('registration.login')}
      </Button>
    </Box>
  );
};

export default transition(AcceptSignupPage);
