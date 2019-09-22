import React from 'react';

export default ({ photos, id }) => (

  <div>
    <h2>Galeria zdjęć</h2>
    <div className='offer__gallery' id={id}>
      {photos.map((photo, i) => (<img src={photo.original} key={i} alt={photo.title} />))}
    </div>
  </div>
)

