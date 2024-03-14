import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/services/redux/store';
import { redirect } from 'next/navigation';

import {
  setAccessToken as setAccessTokenInCookie,
  setRefreshToken as setRefreshTokenInCookie,
  removeAccessToken as removeAccessTokenFromCookie,
  removeRefreshToken as removeRefreshTokenFromCookie,
} from '@/config/cookies';

import { LoginRresponse, AuthState, UserData } from '../types';

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      setAccessTokenInCookie(action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      setRefreshTokenInCookie(action.payload);
    },
    registered: (state, action: PayloadAction<any>) => {
      // state.user = action.payload;
      redirect('/auth/login');
    },
    login: (state, action: PayloadAction<LoginRresponse>) => {
      state.accessToken = action.payload.accessToken;
      setAccessTokenInCookie(action.payload.accessToken);
      setRefreshTokenInCookie(action.payload.refreshToken);
      redirect('/auth/dashboard');
    },
    profile: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      redirect('/auth/dashboard');
    },
    logout: (state) => {
      state.accessToken = null;
      removeAccessTokenFromCookie();
      removeRefreshTokenFromCookie();
      redirect('/auth/login');
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  registered,
  login,
  profile,
  logout,
} = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
