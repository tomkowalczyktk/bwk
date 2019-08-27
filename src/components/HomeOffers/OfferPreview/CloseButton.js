import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const CloseButton = ({ onClick }) => {
  return (
    <div>
      <svg className='preview-image__close-button' version="1.1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20" onClick={onClick}>
        <title>cross</title>
        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
      </svg>

      <FontAwesomeIcon icon={faCoffee} className='preview-image__close-button' />

    </div>
  )
}
export default CloseButton;
