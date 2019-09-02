import React from 'react';
import PropTypes from 'prop-types';
import './offer-navigation-controls.scss';

class OfferNavigationControls extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired

  }



  render() {
    const { data, index, prev, next } = this.props;


    return (
      <div className='offer-navigation-controls'>
        <div className='offer-navigation-controls__element offer-navigation-controls__element--left' onClick={prev}><p>Poprzednie biuro</p></div>

        <div className='offer-navigation-controls__status'><p>{index + 1} z {data.length} biur</p> </div>

        <div className='offer-navigation-controls__element offer-navigation-controls__element--right' onClick={next}><p>Następne biuro</p></div>

      </div>
    );
  }
}
export default OfferNavigationControls;