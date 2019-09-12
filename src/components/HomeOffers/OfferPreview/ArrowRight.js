import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const ArrowRight = ({ onClick }) => {
  return (
    <div >
      < FontAwesomeIcon icon={faChevronRight} className='box__arrow-right' onClick={onClick} />

    </div>
  );
}
export default ArrowRight;