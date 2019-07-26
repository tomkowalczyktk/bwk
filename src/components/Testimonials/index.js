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
      end: 2,
      step: 1
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }


  slideLeft() {
    this.setState((prevState) => {
      if (prevState.start < prevState.testimonials.length - prevState.step - 1) {
        return {
          start: prevState.start + prevState.step,
          end: prevState.end + prevState.step
        }


      } else {

        return null;
      }
    })
  }

  slideRight() {
    this.setState((prevState) => {
      if (prevState.end > prevState.testimonials.length - 1 - prevState.step) {
        return {
          end: prevState.end - prevState.step,
          start: prevState.start - prevState.step
        }


      } else {
        return null;
      }
    })
  }



  render() {
    const { testimonials } = this.state;
    return (
      <div className='testimonials' >

        <ArrowLeft onClick={this.slideLeft} />

        {testimonials.slice(this.state.start, this.state.end).map(testimonial => (
          <Testimonial key={testimonial.id} className='testimonial__item'
            {...testimonial}
          />
        ))
        }

        < ArrowRight onClick={this.slideRight} />

      </div >
    );
  }
}
export default Testimonials;
