import Dashboard from 'modules/Dashboard';
import AcceptSignupPage from 'pages/AcceptSignupPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { SingInPage } from 'pages/SignInPage';
import { IRoutes } from 'types';
import { HeaderRoutesList } from './enums';

export const HEADER_ROUTES: IRoutes[] = [
  { name: 'Home', path: HeaderRoutesList.HOME, element: <HomePage /> },
  {
    name: 'pages.masters',
    path: HeaderRoutesList.MASTER_CATALOG,
    element: <div>Master Catalog</div>,
  },
  {
    name: 'pages.studios',
    path: HeaderRoutesList.STUDIO_CATALOG,
    element: <div>Studio Catalog</div>,
  },
  {
    name: 'pages.blog',
    path: HeaderRoutesList.BLOG,
    element: <div>Blog</div>,
  },
  {
    name: 'pages.partners',
    path: HeaderRoutesList.PARTNERS,
    element: <div>Partners</div>,
  },
];

export const LOGIN_ROUTES: IRoutes[] = [
  {
    name: 'registration.login',
    path: HeaderRoutesList.LOGIN,
    element: <LoginPage />,
  },
  {
    name: 'registration.signin',
    path: HeaderRoutesList.SIGNIN,
    element: <SingInPage />,
  },
];

export const HELP_PAGES: IRoutes[] = [
  {
    name: 'Sign in success',
    path: HeaderRoutesList.SIGNIN_SUCCESS,
    element: <AcceptSignupPage />,
  },
  {
    name: 'Dashboard',
    path: HeaderRoutesList.DASHBOARD,
    element: <Dashboard />,
  },
];
