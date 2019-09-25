import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CloseButton = ({ onClick }) => {
  return (
    <div>

      < FontAwesomeIcon icon={faTimes} className='preview-image__container__close-button' onClick={onClick} />
    </div>

  )
}
export default CloseButton;
