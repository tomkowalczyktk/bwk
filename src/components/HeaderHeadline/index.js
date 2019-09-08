import React from 'react';
import './header-headline.scss';
import classnames from 'classnames'

const HeaderHeadline = ({ text, isOfferPage }) => {

  return (
    <h1 className={
      classnames(
        "header-headline",
        { "header-headline--offer-page": isOfferPage }
      )
    }
    >
      {text}
    </h1>
  );
}
export default HeaderHeadline;