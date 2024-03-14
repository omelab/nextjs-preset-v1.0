import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserCredentials } from '../types';

const RegistrationComponent: React.FC = () => {
  const { register, error } = useAuth();
  const [userData, setUserData] = useState<UserCredentials>({
    username: '',
    password: '',
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(userData);
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button type="submit">Register</button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default RegistrationComponent;
