import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile/1234">Profile</Link></li>
          <li><Link to="/playlist/1234">Playlists</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
