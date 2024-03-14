// types.ts
export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginRresponse {
  accessToken: string;
  refreshToken: string;
}

export interface UserData {
  username: string;
}

export interface AuthState {
  accessToken: string | null;
  user: UserData | null;
}
