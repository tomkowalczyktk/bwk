import React from 'react'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PropTypes from 'prop-types';

export default class OfferPreview extends React.Component {
  static propTypes = {
    offer: PropTypes.object.isRequired,
    currentPhotoIndex: PropTypes.number.isRequired,
    slideLeft: PropTypes.func.isRequired,
    slideRight: PropTypes.func.isRequired,

  }


  render() {
    const { offer, currentPhotoIndex, slideLeft, slideRight } = this.props;
    console.log(offer.photos[currentPhotoIndex].fullScreen)
    return (
      <div className='home-offer-desctop__preview-image'>
        <img src={offer.photos[currentPhotoIndex].original} alt={offer.photos.title} />

        <ArrowLeft onClick={slideLeft} />
        <ArrowRight onClick={slideRight} />


      </div >
    )
  }
}
