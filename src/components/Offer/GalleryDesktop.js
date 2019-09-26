import React from 'react';
import Preloader from '../Preloader';

export default ({ photos, id }) => (

  <div>
    <h2>Galeria zdjęć</h2>

    <Preloader images={photos.map(photo => (photo.original))} />


    <div className='offer__gallery' id={id}>
      {photos.map((photo, i) => (<img src={photo.original} key={i} alt={photo.title} />))}
    </div>
  </div>
)

