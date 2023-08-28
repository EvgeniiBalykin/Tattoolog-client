import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { HEADER_ROUTES, LOGIN_ROUTES } from 'routes/HeaderRoutes';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  Container,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { logoutUser, selectLogin } from 'modules/Login/features/loginSlice';
import { useAppDispatch } from 'hooks/redux';
import i18next from 'i18next';

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Container component="main">
      <Toolbar />
      <Divider />
      <List>
        {HEADER_ROUTES.map((route, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link to={route.path}>
                <ListItemText primary={i18next.t(route.name)} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Container>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          backgroundColor: 'rgb(11, 11, 11)',
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
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
            <Box>
              {!token ? (
                LOGIN_ROUTES.map((route) => (
                  <Button
                    component={Link}
                    to={route.path}
                    key={route.path}
                    color="primary"
                    variant="contained"
                  >
                    {i18next.t(route.name)}
                  </Button>
                ))
              ) : (
                <Box sx={{ display: 'flex', gap: '5px' }}>
                  <Avatar alt="Remy Sharp" component={Link} to="/dashboard" />
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="primary"
                    onClick={logOutClick}
                  >
                    {i18next.t('registration.logout')}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
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
