import React, { Component } from 'react';
import moment from "moment";

export default class DateFormater extends Component {

  static defaultProps = {
    format: "YYYY-MM-DD",
    invalidData: "Invalid date input"
  }
  render() {
    const { children, format, invalidData } = this.props;

    if (children instanceof Date) {
      return (
        moment(children).format(format)
      )
    } else if (typeof children === "undefined" || children === null || children === '') {

      return null;

    } else if (typeof children === "string" && moment(children).isValid()) {

      return moment(children).format(format)

    } else {
      return invalidData;
    }
  }
}