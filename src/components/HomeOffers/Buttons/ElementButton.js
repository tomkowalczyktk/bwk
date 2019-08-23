import React from 'react';

export default function ({ label, link }) {
  return (

    <div className='buttons-row__element'>
      <a href={link}>{label}</a>
    </div>
  )
}