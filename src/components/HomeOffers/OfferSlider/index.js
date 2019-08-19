import React, { Component } from 'react'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PropTypes from 'prop-types';

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
          currentPhotoIndex: offer.photos.lenght - 1
        }
      }
    })
  }
  slideRight() {
    const { offer } = this.props;

    this.setState((prevState) => {
      if (prevState.currentPhotoIndex < offer.photos.lenght - 1) {
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
  render() {
    const { offer } = this.props;
    const { currentPhotoIndex } = this.state;
    // console.log({ currentPhotoIndex });
    return (
      <div>
        <img src={offer.photos[currentPhotoIndex].original} alt={offer.photos.title} />

        {/* <ArrowLeft onClick={this.slideLeft} />
        <ArrowRight onClick={this.slideRight} />
 */}
      </div >
    )
  }
}
