import React from 'react';
import './offer-footer.scss';
import { Link } from 'gatsby';

const OfferFooter = () => {
  return (
    <div className="offer-footer">
      <div className=' container footer-container'>

        <div className="footer-left"><p>Możesz także wynająć<br /> pojedyncze biura</p></div>
        <div className="footer-right"><Link to="/oferty">Zobacz więcej</Link></div>
      </div>
    </div>
  )
}
export default OfferFooter;