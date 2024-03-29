import { useRegisterUserMutation } from '@services/authApi';
import { useForm, Controller, useFormState } from 'react-hook-form';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '@helpers/validation';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { IUserData } from '@interfaces/index';
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Container,
  Box,
  TextField,
  InputLabel,
  Alert,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const SingInForm = () => {
  const { t } = useTranslation();
  const [registerUser, { error: registerError, isLoading }] =
    useRegisterUserMutation<any>();
  const navigate = useNavigate();
  const { handleSubmit, control, formState } = useForm<IUserData>({
    mode: 'onChange',
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmit = (data: IUserData) => {
    registerUser(data).then((res: any) => !res?.error && navigate('/success/'));
  };

  // TODO: Fix rules validation
  return (
    <Container maxWidth="xs">
      {registerError && (
        <Alert severity="error">
          {registerError?.data.username || registerError?.data.password}
        </Alert>
      )}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">{t('registration.signin')}</Typography>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              rules={nameValidation as any}
              name="first_name"
              render={({ field }) => (
                <TextField
                  color="secondary"
                  margin="normal"
                  fullWidth
                  label={t('form.name')}
                  error={!!errors.first_name?.message}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.first_name?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="last_name"
              rules={nameValidation as any}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  margin="normal"
                  fullWidth
                  label={t('form.surname')}
                  error={!!errors.last_name?.message}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.last_name?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel
                    required
                    className="select-label"
                    htmlFor="role"
                    style={{ color: 'white' }} // Установите желаемый цвет метки
                  >
                    Role
                  </InputLabel>
                  <Select
                    color="secondary"
                    required
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                    label="Role *"
                  >
                    <MenuItem value="master">Master</MenuItem>
                    <MenuItem value="salon">Studio</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="username"
              rules={emailValidation as any}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  margin="normal"
                  fullWidth
                  error={!!errors.username?.message}
                  label="Email"
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.username?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={passwordValidation as any}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  margin="normal"
                  type="password"
                  fullWidth
                  error={!!errors.password?.message}
                  label={t('form.password')}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.password?.message}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name="re_password"
              rules={passwordValidation as any}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  margin="normal"
                  fullWidth
                  label={t('form.repeat_password')}
                  error={!!errors.password?.message}
                  type="password"
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                  helperText={errors.password?.message}
                  required
                />
              )}
            />
            <LoadingButton
              disabled={!formState.isValid}
              type="submit"
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4 }}
            >
              {t('registration.create_acc')}
            </LoadingButton>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
