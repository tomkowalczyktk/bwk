import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OfferThumbnail from '../OfferThumbnail';
import OfferPreview from '../OfferPreview';
import Preloader from '../../Preloader';

class OfferSlider extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,

  }

  constructor(props) {

    super(props)
    this.state = {
      isFullScreen: false

    }
    this.previewToggle = this.previewToggle.bind(this);
  }

  previewToggle() {
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen
    }
    ));
  }
  render() {
    const { item, } = this.props;
    const { isFullScreen } = this.state;

    return (
      <React.Fragment>
        <Preloader images={item.photos.map(photo => (photo.original))} />
        <OfferThumbnail
          src={item.photos[0].original}
          title={item.photos[0].title}
          onClick={this.previewToggle} />

        {isFullScreen && <div>
          <Preloader images={item.photos.map(photo => (photo.original))} />

          <OfferPreview
            data={item.photos}
            onClick={this.previewToggle}
          />
        </div>}
      </React.Fragment>
    )
  }
}


export default OfferSlider;
