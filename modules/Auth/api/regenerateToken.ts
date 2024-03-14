import { getRefreshToken } from '@/config/cookies';

export const regenerateToken = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URI}/auth/refresh`;
  const refreshToken = getRefreshToken();
  const resultoken: any = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  }).then((response) => {
    return response.json();
  });
  return resultoken;
};
