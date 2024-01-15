export enum HeaderRoutesList {
  HOME = '/',
  LOGIN = 'login',
  SIGNIN = 'signin',
  RESET_PSWRD = 'reset',
  MASTER_CATALOG = 'master_catalog',
  STUDIO_CATALOG = 'salon_catalog',
  BLOG = 'blog',
  PARTNERS = 'partners',
  SUCCESS_PAGE = 'success',
  ACTIVATION_PAGE = '/activation/:uid/:token',
  PROFILE = 'profile/:id',
  CONTACTS = 'contacts',
  MAGAZINE = 'magazine',
  ERROR = 'error_page',
  BLOG_POST = 'blog/:slug/:id',
  NEW_PASSWORD = '/reset_password_confirm/:uid/:token',
  PROFILE_EDIT = 'profile/:id/edit',
  FESTIVALS = 'festivals',
  FESTIVAL_POST = 'festivals/:slug',
  PORTFOLIO_POST = 'post/:id',
}
