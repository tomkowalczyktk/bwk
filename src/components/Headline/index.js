import React from 'react';
import './headline.scss';

const Headline = ({ title }) => {
  return (
    <div className='headline'>
      <h2 className='headline__title'>
        {title}
      </h2>
    </div>
  );
}

export default Headline;
