import React from 'react';
import PropTypes from 'prop-types';
import OfferDetail from './OfferSlider/OfferDetail';

export default class OfferDetails extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired
  }

  render() {
    const { offer } = this.props;

    return (
      <div className='home-offer-desctop__details__textbox'>

        <OfferDetail
          label="Powierzchnia"
          value={offer.area}
          unit="m2"
        />
        <OfferDetail
          label="Cena"
          value={offer.price}
          unit="zł"
        />
        <OfferDetail
          label="Ulica"
          value={offer.street}
          unit=""
        />
        <OfferDetail
          label="Piętro"
          value={offer.floor}
          unit=""
        />
        <OfferDetail
          label="Szybki internet"
          value={offer.internet}
          unit="boolean"
        />
        <OfferDetail
          label="Kącik socjalny"
          value={offer.social}
          unit="boolean"
        />
      </div>
    )
  }
}
