import React from 'react';
import PropTypes from 'prop-types';

const ImagePlaceHolder = ({width, height, ...props}) => {
  const url = `https://picsum.photos/${width}/${height}`
  return <img {...props} src={url}/>
}

ImagePlaceHolder.defaultProps = {
  width : 300,
  height: 200
}

export default ImagePlaceHolder;
