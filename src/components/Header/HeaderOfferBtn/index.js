import React from 'react';
import './header-offer-btn.scss';


const HeaderOfferBtn = ({ text }) => {
  return (
    <div className="header-offer-btn-row">
      <div className="header-offer-btn" to="#offers">
        {text}
      </div>
    </div>
  );
}
export default HeaderOfferBtn;
