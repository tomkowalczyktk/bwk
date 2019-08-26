import React from 'react'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PropTypes from 'prop-types';
import './preview.scss';
import withCarousell from '../../hocComponents/withCarousell';

class OfferPreview extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,

  }


  render() {
    const { item, index, prev, next, onClick } = this.props;
    console.log({ item });

    return (
      <div className='preview-image'>
        <img src={item.photos[index].original} alt={item.photos.title} onClick={onClick} />

        <ArrowLeft onClick={prev} />
        <ArrowRight onClick={next} />


      </div >
    )
  }
}
export default withCarousell(OfferPreview);