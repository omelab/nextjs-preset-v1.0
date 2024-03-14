import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get('accessToken');

export const setAccessToken = (accessToken: string) =>
  Cookies.set('accessToken', accessToken);

export const removeAccessToken = () => Cookies.remove('accessToken');

export const getRefreshToken = () => Cookies.get('refreshToken');

export const setRefreshToken = (refreshToken: string) =>
  Cookies.set('refreshToken', refreshToken);

export const removeRefreshToken = () => Cookies.remove('refreshToken');
