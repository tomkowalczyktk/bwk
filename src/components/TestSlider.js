import React from 'react';
import withCarousell from './hocComponents/withCarousell';

const TestSlider = (props) => {

  const { item, prev, next } = props;

  return (
    <div>
      <button onClick={prev}>Left</button>
      <button onClick={next}>Right</button>
      <img src={item.original} alt="" style={{ height: "100px", width: "200px" }} />
    </div>
  )
}
export default withCarousell(TestSlider);