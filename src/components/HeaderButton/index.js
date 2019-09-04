import React from 'react';
import './header-button.scss';


const HeaderButton = ({ image, text }) => {
  return (
    <div className="header-button-row">
      <a className="header-button" href="#offers">
        <img src={image}></img>
        {text}
      </a>
    </div>
  );
}
export default HeaderButton;
