import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { HEADER_ROUTES, LOGIN_ROUTES } from 'routes/HeaderRoutes';
import i18next from 'i18next';
import { useAppDispatch } from 'hooks/redux';
import { logoutUser, selectLogin } from 'store/reducers/loginSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Container,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ResponsiveDrawer from 'components/NavDrawer/NavDrawer';
import Logo from 'images/Logo.svg';
import { clearUser, selectUser } from 'store/reducers/userSlice';
import { useState } from 'react';
import { Logout } from '@mui/icons-material';

export const NavPanel = () => {
  const loginState = useSelector(selectLogin);
  const token = loginState?.token;
  const dispatch = useAppDispatch();
  const logOutClick = () => {
    dispatch(logoutUser());
    dispatch(clearUser());
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id, avatar } = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Убрать инлайновые стили

  return isMobile ? (
    <Container sx={{ marginBottom: '40px' }}>
      <ResponsiveDrawer />
    </Container>
  ) : (
    <AppBar
      className="container"
      position="relative"
      sx={{
        padding: '20px',
        marginBottom: '20px',
        background: 'inherit',
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
                  route.variant as 'text' | 'outlined' | 'contained' | undefined
                }
                size="small"
              >
                {i18next.t(route.name)}
              </Button>
            ))
          ) : (
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Avatar
                src={avatar || ''}
                alt="Remy Sharp"
                onClick={handleClick}
              />
            </Box>
          )}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Box
                sx={{ textDecoration: 'none', color: 'inherit' }}
                component={Link}
                to={`/profile/${id}`}
                display="flex"
              >
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                My Profile
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Box
                sx={{ textDecoration: 'none', color: 'inherit' }}
                component={Link}
                to="/login"
                onClick={logOutClick}
                display="flex"
              >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                Logout
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
