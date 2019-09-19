import React from 'react';
import './header-button.scss';
import { Link } from 'gatsby';


const HeaderButton = ({ image, text }) => {

  return (
    <div className="header-button-row">
      <Link className="header-button" to="/oferty">
        <img src={image} alt="key"></img>
        {text}
      </Link>
    </div>
  );
}
export default HeaderButton;
