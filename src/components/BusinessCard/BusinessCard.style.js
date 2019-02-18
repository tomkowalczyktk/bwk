import React from 'react';
import styled from 'styled-components';

export const Backdrop = styled.div `
  position: fixed;
  background-color: gray;
  width: 100vw;
  height: 100vh;
  padding: 5em;
`;


export const Wrapper = styled.div `
  position: relative;
  font-family: 'American Typewriter';
  background-color: white;
  width: 650px;
  height: 350px;
`;


export const Inner = styled.div `
  position: absolute;
  top: 2em;
  left:1em;
  right: 1em;
  bottom: 1em;

`;


export const NameWrapper = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
`;

export const Name = styled.div `
  font-size: 2.5em;
`;
export const Position = styled.div `
  font-size: 1.1em;
`;

export const Company = styled.div `
  position: absolute;
  right: 0;
  font-size: 1.5em;
  text-align: center;
`;
export const CompanySlogan = styled.div `
  
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
`;


export const Address = styled.div `
  position: absolute;
  bottom: 0;
  font-size: 1em;
  text-align: center;
  width: 100%;
`;

export const Telephone = styled.div `
  position: absolute;
  font-size: 1.5em;
`;
