import React, { Component } from 'react';
import moment from "moment";

export default class DateFormater extends Component {
  render() {
    const { children } = this.props;
    if (children instanceof Date) {
      return (
        <span>{moment(children).format('DD')}.{moment(children).format('MM')}.{moment(children).format('YYYY')} rok</span>
      )
    } else {
      return null
    }
  }
}