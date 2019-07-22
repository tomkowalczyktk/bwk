import React from 'react';
import './testimonial.scss';
import Image from 'gatsby-image';

const Testimonial = (props) => {
  return (
    <div className='testimonial'>
      {/* <Image */}
      src={props.img} alt={`Zdjęcie {props.author} autora referencji`} className='testimonial__avatar'
    />
      <h4 className='testimonial__author'>
        {props.author}
      </h4>
      <p className='testimonial__content'>
        {props.content}
      </p>


    </div>
  );
}
export default Testimonial;