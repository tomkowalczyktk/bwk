import React from 'react';
import PropTypes from 'prop-types';
import OfferNavigationMobile from '../OfferNavigationMobile';
import './offer-slider.scss';



export default class OfferSliderMobile extends React.Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    currentOfferIndex: PropTypes.number.isRequired,
    navigatePreviouse: PropTypes.func.isRequired,
    navigateNext: PropTypes.func.isRequired
  }

  render() {

    const { offers, currentOfferIndex, navigatePreviouse, navigateNext } = this.props;
    return (
      <div className='home-offer-mobile'>
        <img className='home-offer-mobile__img' src={offers[currentOfferIndex].photos[0].original} alt={offers[currentOfferIndex].photos[0].title} />
        <div className='home-offer-mobile__price'><p>{offers[currentOfferIndex].price}zł</p></div>
        <p className='home-offer-mobile__description'>Powierzchnia: <span>{offers[currentOfferIndex].area}m<sup>2</sup></span></p>
        <p className='home-offer-mobile__description'>Ulica: <span>{offers[currentOfferIndex].street}</span></p>
        <OfferNavigationMobile
          navigatePreviouse={navigatePreviouse} navigateNext={navigateNext} />

      </div>

    );
  }


}