import api from '@/services/redux/api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerApi: builder.mutation({
      query: (newUser) => ({
        url: '/public/admni/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginApi: builder.mutation({
      query: (credentials) => ({
        url: '/auth/admin-signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    profileApi: builder.mutation({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
      }),
    }),
    logoutApi: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegisterApiMutation,
  useLoginApiMutation,
  useLogoutApiMutation,
  useProfileApiMutation,
} = authApi;
