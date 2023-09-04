import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from 'images/index';
import { HEADER_ROUTES, LOGIN_ROUTES } from 'routes/HeaderRoutes';
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Stack, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { logoutUser, selectLogin } from 'modules/Login/features/loginSlice';
import { useAppDispatch } from 'hooks/redux';
import i18next from 'i18next';
import './NavDrawer.scss';
import { selectUser } from 'modules/Login/features/userSlice';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const loginState = useSelector(selectLogin);
  const token = loginState?.token;
  const dispatch = useAppDispatch();
  const logOutClick = () => {
    dispatch(logoutUser());
  };
  const { id } = useSelector(selectUser);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Container component="main">
      <Toolbar />
      <Stack>
        {token && (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Avatar alt="Remy Sharp" component={Link} to={`/dashboard/${id}`} />
          </Stack>
        )}
      </Stack>
      <Divider />
      <Stack justifyContent="start" alignItems="start">
        {HEADER_ROUTES.map((route) => (
          <Button
            component={Link}
            to={route.path}
            key={route.path}
            variant="text"
            onClick={handleDrawerToggle}
          >
            {i18next.t(route.name)}
          </Button>
        ))}
      </Stack>
      {token && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            onClick={() => {
              logOutClick();
              handleDrawerToggle();
            }}
            fullWidth
          >
            {i18next.t('registration.logout')}
          </Button>
        </Stack>
      )}
      <Divider />
      <Stack>
        {!token &&
          LOGIN_ROUTES.map((route) => (
            <Button
              component={Link}
              to={route.path}
              key={route.path}
              color="primary"
              variant="outlined"
              onClick={handleDrawerToggle}
            >
              {i18next.t(route.name)}
            </Button>
          ))}
      </Stack>
    </Container>
  );

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />
      <AppBar
        sx={{
          ml: { sm: `${drawerWidth}px` },
          background: '#0B0B0B',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            to={'/'}
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img className="logo" src={Logo} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#0B0B0B',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#0B0B0B',
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
      </Container>
    </Container>
  );
}
