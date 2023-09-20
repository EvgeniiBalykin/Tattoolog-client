import { Outlet } from 'react-router';
import { NavPanel } from './NavPanel/NavPanel';
import '../globalStyles.scss';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <NavPanel />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
