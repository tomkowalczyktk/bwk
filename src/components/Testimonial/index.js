import React from 'react';
import './testimonial.scss';

const Testimonial = ({ image, name, content }) => {
  return (
    <div className='testimonial'>

      <img className='testimonial__avatar' src={image} alt={`foto ${name}`} />
      <h3 className='testimonial__signature'>{name}</h3>
      <p className='testimonial__content'>{content}</p>

    </div>
  );
}
export default Testimonial;