import React from 'react';
import PropTypes from 'prop-types';

const Offer = ({id, content}) => {
  return (
    <div>
      <h2>id: {id}</h2>
      <div>{content}</div>
    </div>
  );
}

// Specifies types for props:
Offer.propTypes = {
  
};

export default Offer;
