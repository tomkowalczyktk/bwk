import React from 'react';

const withRedBackground = (WrappperComponent) => {
  return class extends React.Component {

    render() {
      const style = {
        backgroundColor: "#cc0000"
      }
      return (
        <WrappperComponent style={style} {...this.props} />
      )
    }
  }
}
export default withRedBackground;