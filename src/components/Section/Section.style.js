import styled from 'styled-components';
export const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1em;
  position: relative;
  &:after {
    content: '';
    width: 100px;
    height: 3px;
    background-color: gray;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    margin: 0 auto;
  }
`;
