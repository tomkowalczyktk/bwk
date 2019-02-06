import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'components/UI';
import { MainPhoto } from './OfficeGallery.style';

const OfficeGallery = (props) => {
  return (
    <React.Fragment>
      <MainPhoto/>
      
      <div class="btn-group d-flex" role="group" aria-label="Basic example">
        <button type="button" class="flex-fill btn btn-secondary ">Poprzednie biuro</button>
        <button type="button" class="flex-fill btn btn-light">Zobacz wszystkie</button>
        <button type="button" class="flex-fill btn btn-secondary">Następnę biuro</button>
      </div>
    </React.Fragment>
  )
}

// Specifies types for props:
OfficeGallery.propTypes = {

};

export default OfficeGallery;
