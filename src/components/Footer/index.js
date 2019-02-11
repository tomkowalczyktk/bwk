import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className="row pt-3">
      <div className="col">
          <ul className="list-unstyled">
            <li><h6>Na skróty</h6></li>
            <li><a href="#">Biura</a></li>
            <li><a href="#">Korzysci</a></li>
            <li><a href="#">Referencje</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
            <li><h6>Dokumenty</h6></li>
            <li><a href="#">Regulamin</a></li>
            <li><a href="#">Umowa najmu</a></li>
            <li><a href="#">Protokół odbioru</a></li>
          </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
            <li><h6>Gorącę oferty</h6></li>
            <li><a href="#">20m2, ul. Chopina</a></li>
            <li><a href="#">13m2, ul. Jasna</a></li>
            <li><a href="#">70mm2,ul. Górna</a></li>
          </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
            <li><h6>Kontakt</h6></li>
            <li>Biuro w Kamienicy Sp. z o.o.</li>
            <li>ul. Lipowa 4a, 20-420 Lublin</li>
            <li>NIP: 725-18-01-126</li>
            <li>KRS: 0000045146</li>
          </ul>
      </div>
    </div>
  );
}

// Specifies types for props:
Footer.propTypes = {
  
};

export default Footer;
