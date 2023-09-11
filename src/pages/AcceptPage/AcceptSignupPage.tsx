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
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        {t('registration.email_invite')}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {t('registration.make_access')}
      </Typography>
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

export default AcceptSignupPage;
