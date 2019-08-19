import React from 'react';
import PropTypes from 'prop-types';

export default class OfferDetails extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired
  }

  render() {
    const { offer } = this.props;

    return (
      <div className='home-offer-desctop__details__textbox'>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer__details__textbox__element__left'>Powierzchnia:</p>
          <p className='home-offer-desctop__details__textbox__element__right'> <strong>{offer.area}m<sup>2</sup> </strong></p>
        </div>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer-desctop__details__textbox__element__left'>Cena:</p>
          <p className='home-offer-desctop__details__textbox__element__right'><strong>{offer.price}</strong></p>
        </div>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer-desctop__details__textbox__element__left'>Ulica:</p>
          <p className='home-offer-desctop__details__textbox__element__right'> <strong>{offer.street}</strong></p>
        </div>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer-desctop__details__textbox__element__left'>Piętro:</p>
          <p className='home-offer-desctop__details__textbox__element__right'><strong>{offer.floor}</strong></p>
        </div>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer-desctop__details__textbox__element__left'>Szybki internet:</p>
          <p className='home-offer-desctop__details__textbox_element__right'><strong>{offer.internet ? "Tak" : "Nie"}</strong></p>
        </div>

        <div className='home-offer-desctop__details__textbox__element'>
          <p className='home-offer-desctop__details__textbox__element__left'>Kącik socjalny:</p>
          <p className='home-offer-desctop__details__textbox__element__right'><strong>{offer.social ? "Tak" : "Nie"}</strong></p>
        </div>

      </div>
    )
  }
}
