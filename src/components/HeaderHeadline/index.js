import React from 'react';
import './header-headline.scss';

const HeaderHeadline = ({ text }) => {
  return (
    <h1 className="header-headline">
      {text}
    </h1>
  );
}
export default HeaderHeadline;