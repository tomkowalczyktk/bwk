import React from 'react';
import PropTypes from 'prop-types';
import OfferNavigationMobile from '../../OfferNavigationMobile';
import './offer-mobile.scss';
import withCarousell from '../../../hocComponents/withCarousell';

class OfferSliderMobile extends React.Component {
  static propTypes = {
    item: PropTypes.array.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }

  render() {

    const { item, prev, next } = this.props;
    console.log("props", { item, prev, next });
    return (
      <div className='offer-mobile'>
        <div className='offer-mobile__img'>
          <img src={item.photos[0].original} alt={item.photos.title} />
          <div className='offer-mobile__price'><p>{item.price}zł</p></div>
        </div>
        <p className='offer-mobile__description'>Powierzchnia: <span>{item.area}m<sup>2</sup></span></p>
        <p className='offer-mobile__description'>Ulica: <span>{item.street}</span></p>
        <OfferNavigationMobile
          navigatePreviouse={prev} navigateNext={next} />
      </div>
    );
  }
}
export default withCarousell(OfferSliderMobile);