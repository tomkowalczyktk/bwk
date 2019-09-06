import React from 'react'
import PropTypes from 'prop-types';
import './offer-gallery-mobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import withCarousell from '../../hocComponents/withCarousell';

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
        <div className='offer-gallery-mobile__img'>
          <img src={item.original} alt={item.title} />
        </div>



        {data.length > 1 && < FontAwesomeIcon icon={faChevronLeft} className='offer-gallery-mobile__arrow-left' onClick={prev} />}

        {data.length > 1 && < FontAwesomeIcon icon={faChevronRight} className='offer-gallery-mobile__arrow-right' onClick={next} />}

      </div >
    )
  }
}
export default withCarousell(OfferGalleryMobile);
