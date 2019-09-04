import React from 'react';
import './rent-button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';


const RentButton = ({ text, anchor }) => {
  return (
    <div className="rent-button-row">
      <a className="rent-button" to={anchor}>
        < FontAwesomeIcon icon={faKey} />
        {text}
      </a>
    </div>
  );
}
export default RentButton;