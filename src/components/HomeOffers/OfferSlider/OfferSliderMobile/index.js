import React from 'react';
import PropTypes from 'prop-types';
import OfferNavigationMobile from '../../OfferNavigationMobile';
import './offer-mobile.scss';



export default class OfferSliderMobile extends React.Component {
  static propTypes = {
    item: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }

  render() {

    const { item, index, prev, next } = this.props;
    return (
      <div className='offer-mobile'>
        <img className='offer-mobile__img' src={item.photos[index].original} alt={item.photos.title} />
        <div className='offer-mobile__price'><p>{item[index].price}zł</p></div>
        <p className='offer-mobile__description'>Powierzchnia: <span>{item[index].area}m<sup>2</sup></span></p>
        <p className='offer-mobile__description'>Ulica: <span>{item[index].street}</span></p>
        <OfferNavigationMobile
          navigatePreviouse={prev} navigateNext={next} />

      </div>

    );
  }


}