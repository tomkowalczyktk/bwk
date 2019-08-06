import React from 'react';
import './testimonials.scss';
import Testimonial from '../Testimonial';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

class Testimonials extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      testimonials: this.props.testimonials,
      start: 0,
      end: 1,
      step: 1
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }


  slideLeft() {
    this.setState((prevState) => {
      return {

        start: (prevState.start > 0 && prevState.start <= prevState.testimonials.length - 1) ?

          prevState.start - prevState.step : prevState.testimonials.length - 1

        ,

        end: (prevState.end > 0 && prevState.end <= prevState.testimonials.length - 1) ?

          prevState.end - prevState.step : prevState.testimonials.length - 1

      }
    })
  }

  slideRight() {
    this.setState((prevState) => {
      return {

        start: (prevState.start >= 0 && prevState.start < prevState.testimonials.length - 1) ?

          prevState.start + prevState.step : 0

        ,

        end: (prevState.end >= 0 && prevState.end < prevState.testimonials.length - 1) ?

          prevState.end + prevState.step : 0

      }

    })
  }


  render() {
    const { testimonials } = this.state;
    return (
      <div className='testimonials' >

        <ArrowLeft onClick={this.slideLeft} />

        <Testimonial
          {...testimonials[this.state.start]} className='testimonials__item'
        />
        <Testimonial
          {...testimonials[this.state.end]} className='testimonials__item'
        />

        < ArrowRight onClick={this.slideRight} />

      </div >
    );
  }
}
export default Testimonials;
