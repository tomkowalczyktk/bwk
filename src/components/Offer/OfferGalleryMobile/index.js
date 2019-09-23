import React from 'react'
import PropTypes from 'prop-types';
import './offer-gallery-mobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import withCarousell from '../../hocComponents/withCarousell';
import Preloader from '../../Preloader';

class OfferGalleryMobile extends React.Component {
  static propTypes = {
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data, item, prev, next } = this.props;


    return (
      <div className='offer-gallery-mobile'>
        <Preloader images={data.map(photo => (photo.original))} />
        <div className='offer-gallery-mobile__img'>
          <img src={item.original} alt={item.title} />
        </div>



        {data.length > 1 &&
          <React.Fragment>
            < FontAwesomeIcon icon={faChevronLeft} className='offer-gallery-mobile__arrow-left' onClick={prev} />

            < FontAwesomeIcon icon={faChevronRight} className='offer-gallery-mobile__arrow-right' onClick={next} />
          </React.Fragment>}
      </div >
    )
  }
}
export default withCarousell(OfferGalleryMobile);
