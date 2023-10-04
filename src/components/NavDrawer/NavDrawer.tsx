import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from '@images/index';
import { HEADER_ROUTES, LOGIN_ROUTES } from '@routes/HeaderRoutes';
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Stack, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { logoutUser, selectLogin } from '@store/reducers/loginSlice';
import { useAppDispatch } from '@hooks/redux';
import i18next from 'i18next';
import './NavDrawer.scss';
import { selectUser } from '@store/reducers/userSlice';
import LangSwitcher from '@components/LangSwitcher/LangSwitcher';

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
  const { id, avatar } = useSelector(selectUser);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Container component="main">
      <Toolbar />
      <Stack mb={2}>
        {token && (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Avatar
              src={avatar || ''}
              alt="Remy Sharp"
              component={Link}
              to={`/profile/${id}`}
              sx={{ width: 100, height: 100 }}
              onClick={handleDrawerToggle}
            />
          </Stack>
        )}
      </Stack>
      <Divider />
      <LangSwitcher isSelect={false} />
      <Stack justifyContent="start" alignItems="start" gap={2}>
        {HEADER_ROUTES.map((route) => (
          <Button
            component={Link}
            to={route.path}
            key={route.path}
            variant="outlined"
            fullWidth
            onClick={handleDrawerToggle}
          >
            {i18next.t(route.name)}
          </Button>
        ))}
        {token ? (
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
        ) : (
          LOGIN_ROUTES.map((route) => (
            <Button
              component={Link}
              to={route.path}
              key={route.path}
              color="primary"
              variant="contained"
              onClick={handleDrawerToggle}
              fullWidth
            >
              {i18next.t(route.name)}
            </Button>
          ))
        )}
      </Stack>
      <Divider />
    </Container>
  );

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
      }}
    >
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
            {/* <MenuIcon /> */}
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
