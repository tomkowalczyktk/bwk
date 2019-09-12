import React from 'react';
import './rent-button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';


const RentButton = ({ text, onClick }) => {
  return (
    <div className="rent-button-row">
      <span className="rent-button" href="#" onClick={onClick}>
        < FontAwesomeIcon icon={faKey} />
        {text}
      </span>
    </div>
  );
}
export default RentButton;