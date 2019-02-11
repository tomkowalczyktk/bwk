import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBar = styled.div`
  background-color: black;
`

const ButtonBar = (props) => {
  return (
    <StyledBar>  
      <div className="container p-3 text-center">
        Biuro w Kamienicy © Wszelkie prawa zastrzeżone
      </div>
    </StyledBar>
  );
}

// Specifies types for props:
ButtonBar.propTypes = {
  
};

export default ButtonBar;
