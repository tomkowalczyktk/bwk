import React from 'react';
import PropTypes from 'prop-types';

const withCarousell = (WrappedComponent) => {

  return class extends React.Component {
    static propTypes = {
      data: PropTypes.arrayOf(PropTypes.object)
    }

    state = {
      index: 0
    }

    slideLeft = () => {
      const { data } = this.props;

      this.setState(prevState => ({
        index: prevState.index > 0 ? prevState.index - 1 : data.length - 1
      })
      )
    }

    slideRight = () => {
      const { data } = this.props;

      this.setState(prevState => ({
        index: prevState.index < data.length - 1 ? prevState.index + 1 : 0
      })
      )
    }

    render() {
      const { index } = this.state;
      const { ...props } = this.props;
      const item = props.data ? props.data[index] : null;
      return <WrappedComponent
        {...props}
        item={item}
        prev={this.slideLeft}
        next={this.slideRight}
        index={index}
      />
    }
  }
}
export default withCarousell;