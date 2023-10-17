import { Container, Typography, Box, TextField } from '@mui/material';
import { useResetPasswordMutation } from '@services/authApi';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router';
import { HeaderRoutesList } from '@routes/HeaderRoutes/enums';
import { LoadingButton } from '@mui/lab';
import { IQueryData } from '@interfaces/index';

export const ResetForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [resetPassword, { error: resetError, isLoading }] =
    useResetPasswordMutation<IQueryData>();

  const onSubmit = () => {
    resetPassword(email).then(
      (res: any) => !res?.error && navigate(`/${HeaderRoutesList.SUCCESS_PAGE}`)
    );
  };

  return (
    <Container maxWidth="xs">
      {resetError && (
        <Alert severity="error">{resetError?.data.email[0]}</Alert>
      )}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">
          {' '}
          {t('registration.reset_password')}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            color="secondary"
            margin="normal"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoadingButton
            loading={isLoading}
            onClick={onSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 4 }}
          >
            {t('registration.reset')}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
