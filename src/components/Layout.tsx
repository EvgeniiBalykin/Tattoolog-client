import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { NavPanel } from './NavPanel/NavPanel';

const Layout = () => {
  return (
    <>
      <header>
        <NavPanel />
      </header>
      <Box sx={{ background: 'rgb(11, 11, 11)' }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
