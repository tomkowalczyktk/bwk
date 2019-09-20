import React from 'react';
import './textbox.scss';
import PropTypes, { bool, number, string } from 'prop-types';
import AmountFormater from '../../AmountFormater';

export default class OfferDetail extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.number,
    PropTypes.string
    ]).isRequired,
    unit: PropTypes.string,
    net: PropTypes.bool.isRequired

  }
  render() {
    const { label, value, unit, net } = this.props;
    let valueDisplayed;
    switch (unit) {
      case "m2":
        valueDisplayed = <span>{value}m<sup>2</sup></span>;
        break;
      case "zł":
        valueDisplayed = <span><AmountFormater>{value}</AmountFormater><span>{net ? "netto" : "brutto"}</span></span>;
        break;
      case "boolean":
        valueDisplayed = <span> {true ? "TAK" : "NIE"}</span>;
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