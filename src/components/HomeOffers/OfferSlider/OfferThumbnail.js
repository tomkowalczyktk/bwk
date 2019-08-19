import React from 'react'
import PropTypes from 'prop-types';

export default class OfferThumbnail extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired,
    currentPhotoIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }



  render() {
    const { offer, currentPhotoIndex, onClick } = this.props;
    return (
      <div>
        <img src={offer.photos[currentPhotoIndex].original} alt={offer.photos.title} onClick={onClick} />

      </div >
    )
  }
}
