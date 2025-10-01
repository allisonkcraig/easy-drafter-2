import React from 'react';
import '../style/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Easy Drafter 2.0</span>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
        </li>
        {/* Add more nav items here as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
