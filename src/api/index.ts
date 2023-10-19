export const SING_UP = 'auth/users/';
export const SIGN_IN = 'auth/jwt/create/';
export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.VITE_API_URL_PROD
    : process.env.VITE_API_URL_LOCAL;
export const PROFILE_DATA = 'auth/users/me/';
export const PROFILE_USER = `accounts/profile/`;
export const PROFILES_BY_ROLE = `accounts/profiles/`;
export const PROFILE_PORTFOLIO = 'portfolio/posts/profile/';
export const ADD_POST = 'portfolio/post/create/';
export const ADD_POST_PHOTO = 'portfolio/post-photo/create/';
export const WORK_TYPES = 'portfolio/work_types/';
export const COUNTRIES = 'tools/countries/';
export const CITIES = 'tools/cities/';
export const BLOG_POSTS = 'tools/blogs/';
export const BLOG_POST = 'tools/blog/';
export const PARTNERS = 'tools/partners/';
export const RESET_PASSWORD = 'auth/users/reset_password/';
export const SET_NEW_PASSWORD = 'auth/users/reset_password_confirm/';
export const SIGNUP_ACTIVATION = 'auth/users/activation/';
export const GET_AVG_RATING = (id: number) =>
  `tools/profile/${id}/average-rating`;
export const UPDATE_RATING = 'tools/rating/';
