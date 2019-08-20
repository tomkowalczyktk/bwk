import React from 'react';
import PropTypes from 'prop-types';

export default class OfferNavigationMobile extends React.Component {
  static propTypes = {
    navigatePreviouse: PropTypes.func.isRequired,
    navigateNext: PropTypes.func.isRequired,
  }
  render() {
    const { navigatePreviouse, navigateNext } = this.props;
    return (
      <div className='home-offer-mobile__navigation'>
        <div className='home-offer-mobile__navigation__button'
          onClick={navigatePreviouse}>
          <p>Poprzednie biuro</p>
        </div>
        <div className='home-offer-mobile__navigation__button'
          onClick={navigateNext}>
          <p>Następne biuro</p>
        </div>
      </div>
    )
  }
}


