import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import './header.scss';
const Header = (props) => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} className="header__logo" alt=" Logo " /></Link>
      <ul>
        <li><Link to="/oferty">Biura</Link></li>
        <li><Link to="/advantages">Korzyści</Link></li>
        <li><Link to="/oferty">Referencje</Link></li>
        <li><Link to="/oferty">Kontakt</Link></li>
      </ul>
    </header>
  );
}

// Specifies types for props:
Header.propTypes = {

};

export default Header;
