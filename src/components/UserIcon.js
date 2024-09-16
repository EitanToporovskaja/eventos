import React from 'react';
import AuthService from '../services/AuthService';

function UserIcon() {
  const user = AuthService.getCurrentUser();

  if (!user) return null;

  return (
    <div className="user-icon">
      <span>{user.name}</span>
      <button onClick={() => AuthService.logout()}>Logout</button>
    </div>
  );
}

export default UserIcon;
