import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { redirect } from 'next/navigation';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { getAccessToken, getRefreshToken } from '@/config/cookies';
import {
  setAccessToken,
  logout,
  setRefreshToken,
} from '@/modules/Auth/slices/authSlice';

import { regenerateToken } from '@/modules/Auth/api/regenerateToken';

// Add your base URL here
const BASE_URL = process.env.NEXT_PUBLIC_API_URI;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // this method should retrieve the token without a hook
    const token = getAccessToken();

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = getRefreshToken(); // Implement this function to get the refresh token

    // Try to refresh the token
    const refreshResult = await regenerateToken();

    if (refreshResult.accessToken) {
      // store the new token in the store or wherever you keep it
      api.dispatch(setAccessToken(refreshResult.accessToken));
      api.dispatch(setRefreshToken(refreshResult.refreshToken));

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // refresh failed - do something like redirect to login or show a "retry" button
      api.dispatch(logout());
      redirect('/login');
    }
  }
  return result;
};

//create base api object
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth, // Use the custom baseQuery function
  // Add interceptor for token refreshing
  //   refetchOnMountOrArgChange: true,
  //   refetchOnReconnect: true,
  //   refetchOnFocus: true,
  //   keepUnusedDataFor: 60,
  // tagTypes: ['User', 'Post'],
  endpoints: (builder) => ({
    // Add more endpoints as needed
  }),
});

export default api;
