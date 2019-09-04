import React from 'react';
import './header-headline.scss';
import classnames from 'classnames'

const HeaderHeadline = ({ text, isOfferPage }) => {
  const styleList = classnames("header-headline", { "header-headline--offer-page": isOfferPage })
  return (
    <h1 className={styleList}>
      {text}
    </h1>
  );
}
export default HeaderHeadline;