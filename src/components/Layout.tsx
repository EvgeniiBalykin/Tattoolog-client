import { Outlet } from 'react-router';
import { NavPanel } from './NavPanel/NavPanel';
import '../globalStyles.scss';
import Footer from './Footer/Footer';
import CookieWindow from './CookieWindow/CookieWindow';

const Layout = () => {
  return (
    <>
      <NavPanel />
      <Outlet />
      <CookieWindow />
      <Footer />
    </>
  );
};

export default Layout;
