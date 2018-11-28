import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StylePlaceholder = styled.div`
  height: ${props =>props.height};
  background: ${props => props.color === 'dark' ? "#ccc" : "white"};
  position: relative;
  overflow: hidden;
`

const Placeholder = (props) => {
  return <StylePlaceholder {...props}/>
}

// Specifies types for props:
Placeholder.propTypes = {
  color : PropTypes.string,
  height : PropTypes.string
};

Placeholder.defaultProps = {
  color: 'dark',
  height : '20em'
}

export default Placeholder;
