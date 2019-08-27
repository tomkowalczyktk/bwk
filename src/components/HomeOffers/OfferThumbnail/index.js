import React from 'react'
import PropTypes from 'prop-types';
import './offer-thumbnail.scss';

export default class OfferThumbnail extends React.Component {
  static propTypes = {
    src: PropTypes.any.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }



  render() {
    const { src, title, onClick } = this.props;
    console.log('src', src);
    return (
      <div className="offer-thumbnail">
        <img src={src} alt={title} onClick={onClick} />

      </div >
    )
  }
}
