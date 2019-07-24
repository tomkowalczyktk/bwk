import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import burger from '../../images/icon-burger.png';
import './header.scss';
const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container container--header">
        <div class="header__top">
          <Link to="/"><img src={logo} className="header__top__logo" alt=" Logo " /></Link>
          <div className="header__top__nav">
            <ul className="header-nav-bar">
              <li className="header-nav-bar__item"><Link to="/oferty">Biura</Link></li>
              <li className="header-nav-bar__item"><Link to="/advantages">Korzyści</Link></li>
              <li className="header-nav-bar__item"><Link to="/oferty">Kontakt</Link></li>
              <li className="header-nav-bar__item"><Link to="/oferty">Referencje</Link></li>
            </ul>
            <img className="header__top__nav__burger" src={burger} alt="menu burger icon" /></div>
        </div>



        {children}

      </div>

    </header >
  );
}


export default Header;
