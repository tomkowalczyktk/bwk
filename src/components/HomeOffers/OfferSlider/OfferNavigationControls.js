import React from 'react';
import PropTypes from 'prop-types';

export default class OfferNavigationControls extends React.Component {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    navigatePreviouse: PropTypes.func.isRequired,
    navigateNext: PropTypes.func.isRequired,
    currentOfferIndex: PropTypes.number.isRequired
  }



  render() {
    const { offers, currentOfferIndex, navigatePreviouse, navigateNext } = this.props;


    return (
      <div className='home-offer-desctop__details__navigation__controls'>
        <div className='home-offer-desctop__details__navigation__controls__element' onClick={navigatePreviouse}>Poprzednie biuro</div>

        <div className='home-offer-desctop__details__navigation__controls__status'><p>{currentOfferIndex + 1} z {offers.length} biur</p> </div>

        <div className='home-offer-desctop__details__navigation__controls__element' onClick={navigateNext}>Następne biuro</div>

      </div>
    );
  }
}