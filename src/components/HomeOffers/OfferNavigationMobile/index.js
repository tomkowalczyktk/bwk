import React from 'react';
import PropTypes from 'prop-types';
import './offer-mobile-navigation.scss';

export default class OfferNavigationMobile extends React.Component {
  static propTypes = {
    navigatePreviouse: PropTypes.func.isRequired,
    navigateNext: PropTypes.func.isRequired,
  }
  render() {
    const { navigatePreviouse, navigateNext } = this.props;
    return (
      <div className='offer-mobile-navigation'>
        <div className='offer-mobile-navigation__button'
          onClick={navigatePreviouse}>
          <p>Poprzednie biuro</p>
        </div>
        <div className='offer-mobile-navigation__button'
          onClick={navigateNext}>
          <p>Następne biuro</p>
        </div>
      </div>
    )
  }
}


