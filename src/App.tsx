import Layout from 'components/Layout';
import { useAppDiscpatch } from 'hooks/redux';
import { setUser } from 'modules/Login/features/loginSlice';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { HEADER_ROUTES, HELP_PAGES, LOGIN_ROUTES } from 'routes/HeaderRoutes';

export const App = () => {
  const dispatch = useAppDiscpatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    dispatch(setUser(user));
  });
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
      </Route>
    </Routes>
  );
};
