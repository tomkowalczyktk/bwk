import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  }

  render() {
    const { children } = this.props;

    const formatter = new Intl.NumberFormat('POL', {
      style: 'currency',
      currency: 'PLN',
    });

    if (typeof children === isNaN) {
      return <span>Invalid data!</span>
    } else {
      return (
        <span>{formatter.format(children)} </span>
      )
    }

  }
}