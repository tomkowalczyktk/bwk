import React from 'react';
import burger from '../../images/icon-burger.png';


function Burger({ onClick }) {
  return (
    <img className="header__top__nav__burger" src={burger} alt="menu burger icon"
      onClick={onClick} />
  )
}

export default Burger;
