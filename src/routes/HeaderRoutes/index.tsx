import Profile from '@components/Profile';
import AcceptSignupPage from '@pages/AcceptPage/AcceptSignupPage';
import { LoginPage } from '@pages/LoginPage/LoginPage';
import { SingInPage } from '@pages/SigInPage/SignInPage';
import { IRoutes } from '@interfaces/index';
import { HeaderRoutesList } from './enums';
import BlogPage from '@pages/BlogPage/BlogPage';
import BlogPostPage from '@pages/BlogPostPage/BlogPostPage';
import PartnersPage from '@pages/PartnersPage/PartnersPage';
import ResetPage from '@pages/ResetPage/ResetPage';
import NewPasswordPage from '@pages/NewPasswordPage/NewPasswordPage';
import ActivationPage from '@pages/ActivationPage/ActivationPage';
import ProfileEdit from '@components/Profile/ProfileEdit/ProfileEdit';
import FestivalPage from '@pages/FestivalPage/FestivalPage';
import FestivalsPage from '@pages/FestivalsPage/FestivalsPage';
import ContactsPage from '@pages/ContactsPage/ContactsPage';
import PortfolioPostPage from '@pages/PortfolioPostPage/PortfolioPostPage';
import MasterCatalogPage from '@pages/MasterCatalogPage/MasterCatalogPage';
import StudioCatalogPage from '@pages/StudioCatalogPage/StudioCatalogPage';

export const HEADER_ROUTES: IRoutes[] = [
  {
    name: 'pages.masters',
    path: HeaderRoutesList.MASTER_CATALOG,
    element: <MasterCatalogPage />,
  },
  {
    name: 'pages.studios',
    path: HeaderRoutesList.STUDIO_CATALOG,
    element: <StudioCatalogPage />,
  },
  {
    name: 'pages.festivals',
    path: HeaderRoutesList.FESTIVALS,
    element: <FestivalsPage />,
  },
  {
    name: 'pages.blog',
    path: HeaderRoutesList.BLOG,
    element: <BlogPage />,
  },
  {
    name: 'pages.partners',
    path: HeaderRoutesList.PARTNERS,
    element: <PartnersPage />,
  },
  {
    name: 'pages.contacts',
    path: HeaderRoutesList.CONTACTS,
    element: <ContactsPage />,
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
    path: HeaderRoutesList.SUCCESS_PAGE,
    element: <AcceptSignupPage />,
  },
  {
    name: 'Activation page',
    path: HeaderRoutesList.ACTIVATION_PAGE,
    element: <ActivationPage />,
  },
  {
    name: 'Reset password',
    path: HeaderRoutesList.RESET_PSWRD,
    element: <ResetPage />,
  },
  {
    name: 'Set new password',
    path: HeaderRoutesList.NEW_PASSWORD,
    element: <NewPasswordPage />,
  },
  {
    name: 'Profile',
    path: HeaderRoutesList.PROFILE,
    element: <Profile />,
  },
  {
    name: 'Profile edit',
    path: HeaderRoutesList.PROFILE_EDIT,
    element: <ProfileEdit />,
  },
  {
    name: 'Post',
    path: HeaderRoutesList.BLOG_POST,
    element: <BlogPostPage />,
  },
  {
    name: 'Festival',
    path: HeaderRoutesList.FESTIVAL_POST,
    element: <FestivalPage />,
  },
  {
    name: 'Portfolio Post',
    path: HeaderRoutesList.PORTFOLIO_POST,
    element: <PortfolioPostPage />,
  },
];
