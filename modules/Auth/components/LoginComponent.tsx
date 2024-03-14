import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserCredentials } from '../types';

const LoginComponent: React.FC = () => {
  const { login, error } = useAuth();
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credentials);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Login</button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default LoginComponent;
