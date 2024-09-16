import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';

function Header() {
  return (
    <header className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/home" className="navbar-brand">Eventos</Link>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
