import Cookies from 'js-cookie';

export const token = Cookies.get('accessToken')?.replace(/"/g, '');
