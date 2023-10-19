import { Box, Button, Alert } from '@mui/material';
import { useAcceptRegistrationMutation } from '@services/authApi';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const ActivationPage = () => {
  const [acceptRegistration] = useAcceptRegistrationMutation();
  const { uid, token } = useParams();
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (uid && token)
      acceptRegistration({ uid, token }).then(
        (res: any) => !res.error && setSuccess(true)
      );
  }, [uid, token]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {success ? (
        <Alert variant="outlined" color="success">
          Sign in success
        </Alert>
      ) : (
        <Alert variant="outlined" color="info">
          Loading...
        </Alert>
      )}
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
export default ActivationPage;
