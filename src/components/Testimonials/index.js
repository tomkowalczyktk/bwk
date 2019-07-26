import React from 'react';
import './testimonials.scss';
import Testimonial from '../Testimonial';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

console.log("testi", testimonials.slice(0, testimonials.length));

class Testimonials extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      testimonials: this.props.testimonials,
      start: 0,
      end: (this.props.testimonials.length),
      step: 1
    }

    this.SlideLeft = this.SlideLeft.bind(this);
    this.SlideRight = this.SlideRight.bind(this);
  }


  SlideLeft() {
    this.setState((prevState) => {
      if (prevState.start === 0)
        return {
          start: prevState.start + step
        };
      else {
        null;
      }
    })
  }

  SlideRight() {
    return null
  }

  render() {
    const { testimonials } = this.state;
    return (
      <div className='testimonials'>

        <ArrowLeft onClick={this.SlideLeft} />

        {testimonials.slice(this.state.start, this.state.end).map(testimonial => (
          <Testimonial key={testimonial.id} className='testimonial__item'
            {...testimonial}
          />
        ))}

        <ArrowRight onClick={this.SlideRight} />

      </div>
    );
  }
}
export default Testimonials;