import React from 'react';
import './navigation-bottom.scss';
import { Link } from 'gatsby';
import ButtonSeeMore from '../../ButtonSeeMore';
import ButtonSeeAll from '../../ButtonSeeAll';

const NavigationBottom = ({ item }) => {

  return (
    <div className=' navigation-bottom'>
      <div className=' navigation-bottom__element '>
        <ButtonSeeMore to={`/oferta-${item.id}`} />
        {/* <Link to={`/oferta-${item.id}`}><p><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <title>forward</title>
          <path d="M16.711 8.29l-6-5.996c-0.391-0.391-1.026-0.391-1.417 0s-0.391 1.025 0 1.417l4.293 4.29h-11.59c-0.553 0-1.001 0.448-1.001 1s0.448 1 1.001 1h11.59l-4.292 4.29c-0.391 0.391-0.391 1.025 0.001 1.417s1.026 0.391 1.417 0l6-5.997c0.196-0.196 0.294-0.453 0.294-0.71s-0.097-0.514-0.294-0.71z"></path>
        </svg>Zobacz więcej</p></Link> */}
      </div>
      <div className=' navigation-bottom__element  navigation-bottom__element--right'>
        <ButtonSeeAll to='/oferty' />
        {/* <Link to="oferty"><p>Wszystkie biura</p></Link> */}
      </div>

    </div>
  )
}

export default NavigationBottom;