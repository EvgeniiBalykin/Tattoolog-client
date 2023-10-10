import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material';
// import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSetNewPasswordMutation } from '@services/authApi';
import { useParams } from 'react-router';
import { IQueryData } from '@interfaces/index';
// TODO: Перевести
export const NewPasswordForm = () => {
  const { uid, token } = useParams<{ uid?: string; token?: string }>();
  //   const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [passwords, setPasswords] = useState<{
    password: string;
    re_password: string;
  }>({
    password: '',
    re_password: '',
  });
  const [sendPassword, { error, isLoading }] =
    useSetNewPasswordMutation<IQueryData>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const onSubmit = () =>
    sendPassword({
      uid,
      token,
      new_password: passwords.password,
    }).then((res: any) => !res?.error && navigate('/login'));

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleRepasswordVisibility = () => setShowRepassword((prev) => !prev);

  return (
    <Container maxWidth="xs">
      {error && <Alert severity="error">{error?.data.token[0]}</Alert>}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">New password</Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            type={showPassword ? 'text' : 'password'}
            color="secondary"
            margin="normal"
            name="password"
            fullWidth
            label="Password"
            value={passwords.password}
            onChange={onChange}
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
          <TextField
            type={showRepassword ? 'text' : 'password'}
            color="secondary"
            margin="normal"
            name="re_password"
            fullWidth
            label="Repeat password"
            value={passwords.re_password}
            onChange={onChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleRepasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            loading={isLoading}
            onClick={onSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 4 }}
          >
            Confirm
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};
