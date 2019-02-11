import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Dot} from './Navigation.style';

const Navigation = ({count, activeIndex}) => {
  return (
    <Wrapper>
    {Array.from({length:count}).map((_,i)=>(
      <Dot key={i} active={i === activeIndex}/>
    ))}
    </Wrapper>
  );
}

// Specifies types for props:
Navigation.propTypes = {
  count: PropTypes.number,
  activeIndex : PropTypes.number
};

Navigation.defaultProps = {
  count : 3,
  activeIndex : 1
}

export default Navigation;
