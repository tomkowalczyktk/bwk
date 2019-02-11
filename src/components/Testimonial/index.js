import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Quote, Name, Positon} from './Testimonial.style';

const Testimonial = ({src, quote, name, title, positon}) => {
  return (
    <div className="media">
      <Avatar src={src} className="mr-3" alt="..." />
      <div className="media-body">
        <Quote>
          {quote}
        </Quote>
        <Name>{name}</Name>
        <Positon>{positon}</Positon>
      </div>
    </div>
  );
}

// Specifies types for props:
Testimonial.propTypes = {
  
};

Testimonial.defaultProps = {
  src : 'http://lorempixel.com/200/200/people/9/',
  name : 'Szymon Wałga',
  positon : 'Seo Analyst',
  quote : ' Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec'
}

export default Testimonial;
