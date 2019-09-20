import React from 'react';
import { Link } from '@reach/router';


const HeaderNavBar = ({ onClick }) => {

  return (
    <ul className="header-nav-bar" onClick={onClick} >
      <li className="header-nav-bar__item" ><Link to="/oferty">Biura</Link></li>
      <li className="header-nav-bar__item"><Link to="./#advantages">Korzyści</Link></li>
      <li className="header-nav-bar__item"><Link to="/#contact">Kontakt</Link></li>
      <li className="header-nav-bar__item"><Link to="/#testimonials">Referencje</Link></li>
    </ul>
  )
}
export default HeaderNavBar;