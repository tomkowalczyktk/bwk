import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div.attrs(({ active }) => ({
  className: active ? 'active' : undefined
}))
`
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 50%;
  margin:0 5px;
  opacity: 0.7;
  &.active {
    background-color: var(--primary);
    width: 20px;
    height: 20px;
    opacity: 1;
  }

`;
