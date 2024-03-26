import Layout from '@components/Layout';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { HEADER_ROUTES, HELP_PAGES, LOGIN_ROUTES } from '@routes/HeaderRoutes';
import Cookies from 'js-cookie';
import { selectUser, setUser } from '@store/reducers/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUserDataMutation } from '@services/authApi';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import { logoutUser } from '@store/reducers/loginSlice';
import { useSelector } from 'react-redux';
import { useGetProfileDataQuery } from '@services/profileApi';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@pages/HomePage/HomePage';

export const App = () => {
  const token = Cookies.get('accessToken');
  const [getUserData] = useUserDataMutation();
  const { id } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data: profileData } = useGetProfileDataQuery(id, {
    skip: id === 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (token) {
      getUserData(token?.replace(/"/g, ''))
        .then((response) => {
          if ('data' in response) {
            dispatch(
              setUser({ ...response.data, avatar: profileData?.avatar || '' })
            );
          }
          if (
            response &&
            (response as any)?.error?.data?.code === 'token_not_valid'
          ) {
            dispatch(logoutUser());
          }
        })
        .catch((error) => error && navigate('error_page'));
    }
  }, [token, profileData, dispatch, getUserData, navigate]);

  return (
    <AnimatePresence mode="wait">
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};
