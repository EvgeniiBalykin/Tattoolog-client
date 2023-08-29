import Layout from 'components/Layout';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router';
import { HEADER_ROUTES, HELP_PAGES, LOGIN_ROUTES } from 'routes/HeaderRoutes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {HEADER_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {LOGIN_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {HELP_PAGES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
