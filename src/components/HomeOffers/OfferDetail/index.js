import React from 'react';
import './textbox.scss';
import PropTypes, { bool, number, string } from 'prop-types';

export default class OfferDetail extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.number,
    PropTypes.string
    ]).isRequired,
    unit: PropTypes.string

  }
  render() {
    const { label, value, unit } = this.props;
    let valueDisplayed;
    switch (unit) {
      case "m2":
        valueDisplayed = <span>{value}m<sup>2</sup></span>;
        break;
      case "zł":
        valueDisplayed = <span>{value}zł</span>;
        break;
      case "boolean":
        valueDisplayed = <span> {value ? "TAK" : "NIE"}</span>;
        break;
      default:
        valueDisplayed = <span>{value}</span>;
    }



    return (
      <div className='textbox'>
        <div className='textbox__element'>
          <p className='textbox__element__left'>{label}:</p>
          <p className='textbox__element__right'> {valueDisplayed}</p>
        </div>
      </div>
    )
  }
}