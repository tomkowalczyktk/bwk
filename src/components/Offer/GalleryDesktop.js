import React from 'react';

export default ({ photos }) => (

  <div>
    <h2>Galeria zdjęć</h2>
    <div className='offer__gallery'>
      {photos.map((photo, i) => (<img src={photo.original} key={i} alt={photo.title} />))}
    </div>
  </div>
)

