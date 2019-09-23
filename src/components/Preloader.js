import React from 'react';
import PropTypes from 'prop-types';

export default class Preloader extends React.Component {
  static propTypes = {

    images: PropTypes.arrayOf(PropTypes.string)

  }
  componentDidMount() {
    const { images } = this.props;

    images.forEach((image) => {
      const imageSrc = new Image(image);
    });
  }
  render() {
    return (
      null);
  }
}