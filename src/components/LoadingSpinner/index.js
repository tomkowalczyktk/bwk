import React from 'react';
import './spinner.scss';

export default function LoadingSpinner() {
  return (
    <div className='spinner'>
      <div className='spinner__img'></div>
      <h5 className='spinner__text'>Loading...</h5>
    </div>
  )
}