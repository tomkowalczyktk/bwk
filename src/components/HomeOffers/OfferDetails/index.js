import React from 'react';
import PropTypes from 'prop-types';
import OfferDetail from '../OfferDetail';
import './item-details-textbox.scss';

export default class OfferDetails extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props;

    return (
      <div className='item-details-textbox'>

        <OfferDetail
          label="Powierzchnia"
          value={item.area}
          unit="m2"
        />
        <OfferDetail
          label="Cena"
          value={item.price}
          unit="zł"
          net={item.net}
        />
        <OfferDetail
          label="Ulica"
          value={item.street}
          unit=""
        />
        <OfferDetail
          label="Piętro"
          value={item.floor}
          unit=""
        />
        <OfferDetail
          label="Szybki internet"
          value={item.internet}
          unit="boolean"
        />
        <OfferDetail
          label="Kącik socjalny"
          value={item.social}
          unit="boolean"
        />
      </div>
    )
  }
}
