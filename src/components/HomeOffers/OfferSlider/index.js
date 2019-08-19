import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OfferThumbnail from './OfferThumbnail';
import OfferPreview from './OfferPreview';

export default class OfferSlider extends Component {
  static propTypes = {
    offer: PropTypes.object.isRequired

  }

  constructor(props) {

    super(props)
    this.state = {
      currentPhotoIndex: 0,
      isFullScreen: false

    }
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.previewToggle = this.previewToggle.bind(this);
  }
  slideLeft() {
    const { offer } = this.props;

    this.setState((prevState) => {

      if (prevState.currentPhotoIndex > 0) {
        return {
          currentPhotoIndex: prevState.currentPhotoIndex - 1
        }
      } else {
        return {
          currentPhotoIndex: offer.photos.length - 1
        }
      }
    })
  }
  slideRight() {
    const { offer } = this.props;
    this.setState((prevState) => {
      if (prevState.currentPhotoIndex < offer.photos.length - 1) {
        return {
          currentPhotoIndex: prevState.currentPhotoIndex + 1
        }
      } else {
        return {
          currentPhotoIndex: 0
        }
      }
    })
  }
  previewToggle() {
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen
    }
    ));
  }
  render() {
    const { offer } = this.props;

    const { currentPhotoIndex, isFullScreen } = this.state;

    if (isFullScreen) {
      return (<OfferPreview
        offer={offer}
        currentPhotoIndex={currentPhotoIndex} slideLeft={this.slideLeft}
        slideRight={this.slideRight}
        onClick={this.previewToggle}
      />)
    } else {
      return (<OfferThumbnail
        offer={offer}
        currentPhotoIndex={currentPhotoIndex} onClick={this.previewToggle}
      />)
    }



  }
}
