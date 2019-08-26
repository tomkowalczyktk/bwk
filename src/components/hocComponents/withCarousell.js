import React from 'react';
import PropTypes from 'prop-types';

const withCarousell = (WrappedComponent) => {

  return class extends React.Component {
    static propTypes = {
      data: PropTypes.arrayOf(PropTypes.object)
    }

    state = {
      Index: 0
    }

    slideLeft = () => {
      const { data } = this.props;

      this.setState(prevState => ({
        Index: prevState.Index > 0 ? prevState.Index - 1 : data.length - 1
      })
      )
    }



    slideRight = () => {
      const { data } = this.props;

      this.setState(prevState => ({
        Index: prevState.Index < data.length - 1 ? prevState.Index + 1 : 0
      })
      )
    }

    render() {
      const { Index } = this.state;
      const { ...props } = this.props;
      const item = props.data ? props.data[Index] : null;
      return <WrappedComponent
        {...props}
        item={item}
        prev={this.slideLeft}
        next={this.slideRight}
        index={Index}
      />
    }
  }
}
export default withCarousell;