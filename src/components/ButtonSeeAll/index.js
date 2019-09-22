import React from 'react';
import { Link } from 'gatsby';
import './button-see-all.scss'

const ButtonSeeAll = ({ to }) => {
  return (
    <Link to="oferty" className='button-see-all'> < p > Wszystkie biura</p ></Link >
  );
}
export default ButtonSeeAll;