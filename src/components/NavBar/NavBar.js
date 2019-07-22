import React from 'react';
import './nav-bar.scss';
import { Link } from 'gatsby';


const NavBar = () => {
  return (

    <ul className=" nav-bar">
      <li className=" nav-bar__item"><Link to="/oferty">Biura</Link></li>
      <li className=" nav-bar__item"><Link to="/advantages">Korzyści</Link></li>
      <li className=" nav-bar__item"><Link to="/oferty">Referencje</Link></li>
      <li className=" nav-bar__item"><Link to="/oferty">Kontakt</Link></li>
    </ul>

  )
}
export default NavBar;