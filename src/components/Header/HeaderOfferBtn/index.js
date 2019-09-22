import React from 'react';
import './header-offer-btn.scss';


const HeaderOfferBtn = ({ text }) => {
  return (
    <div className="header-offer-btn-row">
      <div className="header-offer-btn" >
        {text}
      </div>
    </div>
  );
}
export default HeaderOfferBtn;
