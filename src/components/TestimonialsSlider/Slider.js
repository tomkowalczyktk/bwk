import React from 'react';
import './slider.scss';
import Testimonial from '../Testimonial';

export default class Slider extends React.Component {
  constructor() {
    super()
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
  }
  render() {


    return (
      <div className='slider'>
        <div className='slider__arrow slider__arrow--left' onClick={this.handleClick}>
          go left
        </div>
        <div className='slider__display'>

          <Testimonial />
          <Testimonial />

        </div>
        <div className='slider__arrow slider__arrow--right' onClick={this.handleClick}>
          go right
        </div>
      </div>
    )
  }
}

