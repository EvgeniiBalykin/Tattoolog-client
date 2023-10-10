import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useAppDispatch } from '@hooks/redux';
import { useLoginUserMutation, useUserDataMutation } from '@services/authApi';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { emailValidation, passwordValidation } from '@helpers/validation';
import { useNavigate } from 'react-router';
import { setToken } from '@store/reducers/loginSlice';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import Cookies from 'js-cookie';
import { setUser } from '@store/reducers/userSlice';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [loginUser, { data: loginData, error: loginError }] =
    useLoginUserMutation<any>();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<ILoginForm>();
  const { errors } = useFormState({
    control,
  });
  const token = Cookies.get('accessToken');
  const [getUserData] = useUserDataMutation();

  const onSubmit = async ({ email, password }: ILoginForm) => {
    await loginUser({
      email,
      password,
    });
  };

  useEffect(() => {
    if (loginData) {
      dispatch(
        setToken({ token: loginData.access, refreshToken: loginData.refresh })
      );
    }
  }, [loginData, dispatch, navigate, loginError]);

  useEffect(() => {
    if (token) {
      getUserData(token?.replace(/"/g, '')).then((response) => {
        if ('data' in response) {
          dispatch(setUser(response.data));
          navigate(`/profile/${response.data.id}`);
        }
      });
    }
  }, [token]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Container maxWidth="xs">
      {loginError && <Alert severity="error">{loginError?.data.detail}</Alert>}
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
                  color="secondary"
                  margin="normal"
                  fullWidth
                  error={!!errors.email?.message}
                  label="Email"
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
                  color="secondary"
                  margin="normal"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!errors.password?.message}
                  label={t('form.password')}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
              <Link href="#">
                <Typography variant="body2">
                  {t('registration.forgot_password')}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin">
                <Typography variant="body2">
                  {t('registration.need_signup')}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
