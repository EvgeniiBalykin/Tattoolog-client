import Layout from 'components/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import { HEADER_ROUTES, HELP_PAGES, LOGIN_ROUTES } from 'routes/HeaderRoutes';
import Cookies from 'js-cookie';
import { setUser } from 'store/reducers/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUserDataMutation } from 'services/authApi';

export const App = () => {
  const token = Cookies.get('accessToken');
  const [getUserData] = useUserDataMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      getUserData(token?.replace(/"/g, '')).then((response) => {
        if ('data' in response) {
          dispatch(setUser(response.data));
        } else {
          console.error('Error fetching profile data:', response.error);
        }
      });
    }
  }, [token]);

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
