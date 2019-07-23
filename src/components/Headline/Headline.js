import React from 'react';
import './headline.scss';

const Headline = (props) => {
  return (
    <div className='headline'>
      <h2 className='headline__title'>
        {props.title}
      </h2>
    </div>
  );
}

export default Headline;
