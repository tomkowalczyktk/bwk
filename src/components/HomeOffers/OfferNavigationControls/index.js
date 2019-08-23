import React from 'react';
import PropTypes from 'prop-types';
import './offer-navigation-controls.scss';

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
      <div className='offer-navigation-controls'>
        <div className='offer-navigation-controls__element offer-navigation-controls__element--left' onClick={navigatePreviouse}><p>Poprzednie biuro</p></div>

        <div className='offer-navigation-controls__status'><p>{currentOfferIndex + 1} z {offers.length} biur</p> </div>

        <div className='offer-navigation-controls__element offer-navigation-controls__element--right' onClick={navigateNext}><p>Następne biuro</p></div>

      </div>
    );
  }
}