import Catalog from 'pages/CatalogPage/CatalogPage';
import Profile from 'components/Profile';
import AcceptSignupPage from 'pages/AcceptPage/AcceptSignupPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SingInPage } from 'pages/SigInPage/SignInPage';
import { IRoutes } from 'types';
import { HeaderRoutesList } from './enums';
import BlogPage from 'pages/BlogPage/BlogPage';
import PostPage from 'pages/PostPage/PostPage';

export const HEADER_ROUTES: IRoutes[] = [
  {
    name: 'pages.masters',
    path: HeaderRoutesList.MASTER_CATALOG,
    element: <Catalog role="master" />,
  },
  {
    name: 'pages.studios',
    path: HeaderRoutesList.STUDIO_CATALOG,
    element: <Catalog role="salon" />,
  },
  {
    name: 'pages.blog',
    path: HeaderRoutesList.BLOG,
    element: <BlogPage />,
  },
  {
    name: 'pages.partners',
    path: HeaderRoutesList.PARTNERS,
    element: <div>Partners</div>,
  },
  {
    name: 'Contacts',
    path: HeaderRoutesList.CONTACTS,
    element: <div>Contacts</div>,
  },
];

export const LOGIN_ROUTES: IRoutes[] = [
  {
    name: 'registration.signin',
    path: HeaderRoutesList.SIGNIN,
    element: <SingInPage />,
    variant: 'contained',
  },
  {
    name: 'registration.login',
    path: HeaderRoutesList.LOGIN,
    element: <LoginPage />,
    variant: 'outlined',
  },
];

export const HELP_PAGES: IRoutes[] = [
  {
    name: 'Sign in success',
    path: HeaderRoutesList.SIGNIN_SUCCESS,
    element: <AcceptSignupPage />,
  },
  {
    name: 'Profile',
    path: HeaderRoutesList.PROFILE,
    element: <Profile />,
  },
  {
    name: 'Post',
    path: HeaderRoutesList.BLOG_POST,
    element: <PostPage />,
  },
];
