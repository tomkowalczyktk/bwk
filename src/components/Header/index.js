import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import burger from '../../images/icon-burger.png';
import './header.scss';
const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img src={logo} className="header__logo" alt=" Logo " /></Link>
        <img className="header__burger" src={burger} alt="menu burger icon" />
        <ul className="header__nav-bar">
          <li className="header__nav-bar__item"><Link to="/oferty">Biura</Link></li>
          <li className="header__nav-bar__item"><Link to="/advantages">Korzyści</Link></li>
          <li className="header__nav-bar__item"><Link to="/oferty">Referencje</Link></li>
          <li className="header__nav-bar__item"><Link to="/oferty">Kontakt</Link></li>
        </ul>

        {children}

      </div>
    </header>
  );
}

// Specifies types for props:
Header.propTypes = {

};

export default Header;
