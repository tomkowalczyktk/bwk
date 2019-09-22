import React from 'react';
import SpinnerService from '../Spinner/SpinnerService';
export class SpinnerComponent extends React.Component {

  constructor(props, context) {
    super(props, context);



    this.state = {
      show: this.props.hasOwnProperty('show') ? this.props.show : false
    };

    if (this.props.hasOwnProperty('spinnerService')) {
      this.spinnerService = this.props.spinnerService;
    } else {
      this.spinnerService = spinnerService;
    }

    this.spinnerService._register(this);

    if (!this.props.name) {
      throw new Error('Spinner components must have a name prop.');
    }

    if (!this.props.loadingImage && !this.props.children) {
      throw new Error('Spinner components must have either a loadingImage prop or children to display.');
    }

  }

  componentWillUnmount() {
    this.spinnerService._unregister(this);
  }

  get name() {
    return this.props.name;
  }

  get group() {
    return this.props.group;
  }

  get show() {
    return this.state.show;
  }

  set show(show) {
    this.setState({ show });
  }



  render() {
    let divStyle = { display: 'inline-block' };
    if (this.state.show) {
      const { loadingImage } = this.props;
      return (
        <div style={divStyle}>
          {loadingImage && <img src={loadingImage} />}
          {this.props.children}
        </div>
      );
    }
    return (<div style={divStyle}></div>);
  }
}