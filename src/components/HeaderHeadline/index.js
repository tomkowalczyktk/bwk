import React from 'react';
import './header-headline.scss';

const HeaderHeadline = (props) => {
  return (
    <h1 className="header-headline">
      {props.text}
    </h1>
  );
}
export default HeaderHeadline;