import { Outlet } from 'react-router';
import { NavPanel } from '../modules/NavPanel/NavPanel';
import '../globalStyles.scss';
import Footer from '../modules/Footer/Footer';

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
