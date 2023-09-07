import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { HEADER_ROUTES, LOGIN_ROUTES } from 'routes/HeaderRoutes';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'hooks/redux';
import { logoutUser, selectLogin } from 'store/reducers/loginSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, useMediaQuery, useTheme } from '@mui/material';
import ResponsiveDrawer from 'components/NavDrawer/NavDrawer';
import Logo from 'images/Logo.svg';
import { clearUser, selectUser } from 'store/reducers/userSlice';

export const NavPanel = () => {
  const { t } = useTranslation();
  const loginState = useSelector(selectLogin);
  const token = loginState?.token;
  const dispatch = useAppDispatch();
  const logOutClick = () => {
    dispatch(logoutUser());
    dispatch(clearUser());
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useSelector(selectUser);

  // Убрать инлайновые стили

  return isMobile ? (
    <ResponsiveDrawer />
  ) : (
    <AppBar
      className="container"
      position="sticky"
      sx={{
        padding: '20px',
        background: 'linear-gradient(to top, #0B0B0B, #4a2352 200%)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component={Link} to={'/'}>
          <img src={Logo} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '50%',
          }}
        >
          {HEADER_ROUTES.map((route) => (
            <Button
              component={Link}
              to={route.path}
              key={route.path}
              variant="text"
              size="small"
            >
              {i18next.t(route.name)}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {!token ? (
            LOGIN_ROUTES.map((route) => (
              <Button
                component={Link}
                to={route.path}
                key={route.path}
                variant={
                  route.variant as
                    | 'text'
                    | 'dashed'
                    | 'outlined'
                    | 'contained'
                    | undefined
                }
                size="small"
              >
                {i18next.t(route.name)}
              </Button>
            ))
          ) : (
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Avatar
                alt="Remy Sharp"
                component={Link}
                to={`/dashboard/${id}`}
              />
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                onClick={logOutClick}
                size="small"
              >
                {t('registration.logout')}
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
