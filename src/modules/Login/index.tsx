import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
} from '@mui/material';
import { useAppDispatch } from 'hooks/redux';
import { useLoginUserMutation, useProfileDataMutation } from 'services/authApi';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { emailValidation, passwordValidation } from 'helpers/validation';
import { useNavigate } from 'react-router';
import { setToken } from 'modules/Login/features/loginSlice';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Alert } from '@mui/material';
import Cookies from 'js-cookie';
import { setUser } from './features/userSlice';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loginUser, { data: loginData, error: loginError }] =
    useLoginUserMutation();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<ILoginForm>();
  const { errors } = useFormState({
    control,
  });
  const token = Cookies.get('accessToken');
  const [getProfileData] = useProfileDataMutation();

  const onSubmit = async ({ email, password }: ILoginForm) => {
    try {
      await loginUser({
        email,
        password,
      });
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  useEffect(() => {
    if (loginData) {
      dispatch(
        setToken({ token: loginData.access, refreshToken: loginData.refresh })
      );
    }
  }, [loginData, dispatch, navigate, loginError]);

  useEffect(() => {
    getProfileData(token?.replace(/"/g, '')).then((response) => {
      if ('data' in response) {
        dispatch(setUser(response.data));
        navigate(`/dashboard/${response.data.id}`);
      } else {
        console.error('Error fetching profile data:', response.error);
      }
    });
  }, [token]);

  return (
    <Container maxWidth="xs">
      {loginError && (
        <Alert severity="error">Incorrect username or password</Alert>
      )}
      <CssBaseline />
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">{t('registration.login')}</Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              rules={emailValidation}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  error={!!errors.email?.message}
                  label="Email"
                  autoFocus
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={passwordValidation}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  type="password"
                  fullWidth
                  error={!!errors.password?.message}
                  label={t('form.password')}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              {t('registration.login')}
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t('registration.forgot_password')}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                {t('registration.need_signup')}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
