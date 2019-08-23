import React from 'react'
import PropTypes from 'prop-types';
import './offer-thumbnail.scss';

export default class OfferThumbnail extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired,
    currentPhotoIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }



  render() {
    const { offer, currentPhotoIndex, onClick } = this.props;
    return (
      <div className="offer-thumbnail">
        <img src={offer.photos[currentPhotoIndex].original} alt={offer.photos.title} onClick={onClick} />

      </div >
    )
  }
}
