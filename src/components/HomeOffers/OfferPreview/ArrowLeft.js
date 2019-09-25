import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ArrowLeft = ({ onClick }) => {
  return (


    <div>
      < FontAwesomeIcon icon={faChevronLeft} className='preview-image__container__arrow-left' onClick={onClick} />
    </div>


  );

}
export default ArrowLeft;