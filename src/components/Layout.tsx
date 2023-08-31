import { Outlet } from 'react-router';
import { NavPanel } from './NavPanel/NavPanel';
import '../globalStyles.scss';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <NavPanel />
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
