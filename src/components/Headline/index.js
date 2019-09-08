import React from 'react';
import './headline.scss';
import classnames from 'classnames'

const Headline = ({ title, isOfferPage }) => {

  return (
    <div className={
      classnames(
        "headline",
        { "headline--offer-page": isOfferPage }
      )
    }
    >
      <h2 className='headline__title'>
        {title}
      </h2>
    </div>
  );
}

export default Headline;
