import { Outlet } from 'react-router';
import { NavPanel } from './NavPanel';

const Layout = () => {
  return (
    <>
      <header>
        <NavPanel />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
