import React from 'react';
import PropTypes from 'prop-types';
import ImagePlaceHolder from 'components/UI/ImagePlaceHolder';

const Feature = ({title, text}) => {
  return (
    <div className="card">
      <div class="card-body d-flex align-items-center">
        <div className="p-3">
          <ImagePlaceHolder className="card-img-right" height={100} width={100}/>
        </div>
        <div >
          <h5 class="card-title">{title}</h5>
           <p class="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

// Specifies types for props:
Feature.propTypes = {
  
};

Feature.defaultProps = {
  title : 'Korzyść',
  text : 'Some quick example text to build on the card title and make up the bulk of the card`s content.'
}

export default Feature;
