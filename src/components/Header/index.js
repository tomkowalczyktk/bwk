import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './header.scss';
const Header = (props) => {
  return (
    <header className="header">
      <Link to="/"><h1>Biuro w kamienicy</h1></Link>
      <ul>
        <li><Link to="/oferty">oferty</Link></li>
      </ul>
    </header>
  );
}

// Specifies types for props:
Header.propTypes = {
  
};

export default Header;
