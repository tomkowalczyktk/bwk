import React from 'react';
import PropTypes from 'prop-types';
import './offer-navigation-controls.scss';
import withCarousell from '../../hocComponents/withCarousell';

class OfferNavigationControls extends React.Component {
  static propTypes = {
    offers: PropTypes.array.isRequired
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
export default withCarousell(OfferNavigationControls);