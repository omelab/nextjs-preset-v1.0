// useAuth.ts
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  login as loginAction,
  logout as logoutAction,
  registered as registerAction,
  profile as profileAction,
} from '../slices/authSlice';

import {
  useLoginApiMutation,
  useRegisterApiMutation,
  useLogoutApiMutation,
  useProfileApiMutation,
} from '../api/auth';

import { UserCredentials, LoginRresponse, UserData } from '../types';

interface AuthError {
  message: string;
}

export const useAuth = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<AuthError | null>(null);

  const [loginApi, { isLoading }] = useLoginApiMutation();
  const [profileApi, { isLoading: isProfiling }] = useProfileApiMutation();
  const [registerApi, { isLoading: isRegistering }] = useRegisterApiMutation();
  const [logoutApi, { isLoading: isLoggingOut }] = useLogoutApiMutation();

  const login = async (credentials: UserCredentials) => {
    try {
      const response: LoginRresponse = await loginApi(credentials).unwrap();
      dispatch(loginAction(response));
      // Redirect user after successful login
    } catch (error) {
      setError({ message: 'Invalid credentials' });
    }
  };

  const profile = async () => {
    try {
      const user: UserData = await profileApi('').unwrap();
      // set user state and Redirect dashboard user after successful fetching profile
      dispatch(profileAction(user));
    } catch (error) {
      setError({ message: 'Registration failed' });
    }
  };

  const register = async (userData: UserCredentials) => {
    try {
      const response = await registerApi(userData);
      // Redirect user after successful registration
      dispatch(registerAction(response));
    } catch (error) {
      setError({ message: 'Registration failed' });
    }
  };

  const logout = async () => {
    try {
      await logoutApi('');
      // Redirect user after successful logout
      dispatch(logoutAction());
    } catch (error) {
      setError({ message: 'Logout failed' });
    }
  };

  return { login, profile, register, logout, error };
};
