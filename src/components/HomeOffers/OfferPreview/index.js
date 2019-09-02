import React from 'react'
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PropTypes from 'prop-types';
import './preview.scss';
import withCarousell from '../../hocComponents/withCarousell';
import CloseButton from './CloseButton';

class OfferPreview extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data, item, prev, next, onClick } = this.props;

    return (
      <div className='preview-image'>
        <img src={item.original} alt={item.title} onClick={onClick} />

        {data.length > 1 && <ArrowLeft onClick={prev} />}
        {data.length > 1 && <ArrowRight onClick={next} />}
        <CloseButton onClick={onClick} />

      </div >
    )
  }
}
export default withCarousell(OfferPreview);