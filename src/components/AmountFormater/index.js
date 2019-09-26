import React, { Component } from 'react';

export default class extends Component {


  render() {
    const { children } = this.props;

    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'PLN',
      useGrouping: true,
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      minimumIntegerDigits: 1,

    });

    if (typeof children === isNaN) {
      return <span>Invalid data!</span>
    } else {
      return (
        <span>{formatter.format(children).replace(".", " ").replace("PLN", "zł")} </span>
      )
    }

  }
}