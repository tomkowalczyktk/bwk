import React from 'react';
import withRedBackground from './hocComponents/withRedBackground';

const TestButton = (props) => {
  // let { style } = this.props;
  return (
    <button style={props.style}>{props.text}</button>
  )
}
export default withRedBackground(TestButton);