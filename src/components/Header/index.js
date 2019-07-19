import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import './header.scss';
const Header = (props) => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} className="header__logo" alt=" Logo " /></Link>
      <ul className="nav-bar">
        <li className="nav-bar__item"><Link to="/oferty">Biura</Link></li>
        <li className="nav-bar__item"><Link to="/advantages">Korzyści</Link></li>
        <li className="nav-bar__item"><Link to="/oferty">Referencje</Link></li>
        <li className="nav-bar__item"><Link to="/oferty">Kontakt</Link></li>
      </ul>
      <h1>A tu będzie mądry tekst w zależności od strony.</h1>
      <div className="header__button"><Link to="/">Kliknij, a coś Ci pokażę</Link></div>
    </header>
  );
}

// Specifies types for props:
Header.propTypes = {

};

export default Header;
