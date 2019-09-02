import React from 'react';


const HeaderNavBar = ({ onClick }) => {

  return (
    <ul className="header-nav-bar" onClick={onClick} >
      <li className="header-nav-bar__item" ><a href="#home-offers">Biura</a></li>
      <li className="header-nav-bar__item"><a href="#advantages">Korzyści</a></li>
      <li className="header-nav-bar__item"><a href="#contact">Kontakt</a></li>
      <li className="header-nav-bar__item"><a href="#testimonials">Referencje</a></li>
    </ul>
  )
}
export default HeaderNavBar;