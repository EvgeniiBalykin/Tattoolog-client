import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRegisterUserMutation } from 'services/authApi';
import { useForm, Controller, useFormState } from 'react-hook-form';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../../helpers/validation';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

interface ISignForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

export const SingInForm = () => {
  const { t } = useTranslation();
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit = ({
    first_name,
    last_name,
    email,
    password,
    re_password,
  }: ISignForm) => {
    try {
      registerUser({
        first_name,
        last_name,
        email,
        password,
        re_password,
      }).then((res) => res && navigate('/success'));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {t('registration.sigin')}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              rules={nameValidation}
              name="first_name"
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label={t('form.name')}
                  error={!!errors.first_name?.message}
                  autoFocus
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.first_name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="last_name"
              rules={nameValidation}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label={t('form.surname')}
                  error={!!errors.last_name?.message}
                  autoFocus
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.last_name?.message}
                />
              )}
            />
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
                  autoFocus
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="re_password"
              rules={passwordValidation}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label={t('form.repeat_password')}
                  error={!!errors.password?.message}
                  type="password"
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
              sx={{ mt: 3, mb: 2 }}
            >
              {t('registration.create_acc')}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
