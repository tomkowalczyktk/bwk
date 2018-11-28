import React from 'react';
import PropTypes from 'prop-types';
import {Placeholder} from 'components/UI';

const OfficeGallery = (props) => {
  return (
    <React.Fragment>
      <Placeholder/>
      <button type="button" className="btn btn-block btn-secondary">Zdjęcia</button>
    </React.Fragment>
  )
}

// Specifies types for props:
OfficeGallery.propTypes = {
  
};

export default OfficeGallery;
