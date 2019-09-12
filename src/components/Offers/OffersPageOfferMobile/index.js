import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import './offers-page-offer-mobile.scss';
import OfferBtn from '../OfferBtn';
import classnames from 'classnames';
import AmountFormater from '../../AmountFormater';

class OffersPageOfferMobile extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
  }

  render() {

    const { item, i } = this.props;

    return (
      <div className={classnames('offer-mobile', { 'offer-mobile--bg': i % 2 !== 0 })}>
        <div className='offer-mobile__img'>
          <Link to={`/oferta-${item.id}`}>
            <img src={item.photos[0].original} alt={item.photos.title} />
            <div className='offer-mobile__price'><p><AmountFormater>{item.price}</AmountFormater></p></div>
          </Link>
        </div>
        <div className="bottom-part">
          <div className="text">
            <p className='offer-mobile__description'>Powierzchnia: <span>{item.area}m<sup>2</sup></span></p>
            <p className='offer-mobile__description'>Ulica: <span>{item.street}</span></p>
            <p className='offer-mobile__description'>Miasto: <span>{item.city}</span></p>
          </div>
          <div className="bottom-btn">
            <OfferBtn offer={item} mobile={true} />
          </div>
        </div>
      </div>
    );
  }
}
export default OffersPageOfferMobile;