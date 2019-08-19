import React from 'react'
import PropTypes from 'prop-types';

export default class OfferThumbnail extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired,
    currentPhotoIndex: PropTypes.number.isRequired
  }



  render() {
    const { offer, currentPhotoIndex } = this.props;
    return (
      <div>
        <img src={offer.photos[currentPhotoIndex].original} alt={offer.photos.title} />

      </div >
    )
  }
}
