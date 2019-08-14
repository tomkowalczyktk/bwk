import React from 'react';
import './header-button.scss';
import { Link } from 'gatsby';


const HeaderButton = ({ image, text }) => {
  return (
    <div className="header-button-row">
      <a className="header-button" to="#offers">
        <img src={image}></img>
        {text}
      </a>
    </div>
  );
}
export default HeaderButton;
