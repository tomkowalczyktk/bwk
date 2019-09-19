import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import OfferNavigationMobile from '../../OfferNavigationMobile';
import './offer-mobile.scss';
import withCarousell from '../../../hocComponents/withCarousell';
import AmountFormater from '../../../AmountFormater';

class OfferSliderMobile extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }

  render() {

    const { item, prev, next } = this.props;

    return (
      <div className='offer-mobile'>
        <div className='offer-mobile__img'>
          <Link to={`/oferta-${item.id}`}>
            <img src={item.photos[0].original} alt={item.photos.title} />
            <div className='offer-mobile__price'><p>
              <AmountFormater>{item.price}</AmountFormater></p></div>
          </Link>
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