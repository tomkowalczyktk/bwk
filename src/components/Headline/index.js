import React from 'react';
import './headline.scss';
import classnames from 'classnames'

const Headline = ({ title, isOfferPage }) => {
  const styles = classnames("headline", { "headline--offer-page": isOfferPage });
  return (
    <div className={styles}>
      <h2 className='headline__title'>
        {title}
      </h2>
    </div>
  );
}

export default Headline;
