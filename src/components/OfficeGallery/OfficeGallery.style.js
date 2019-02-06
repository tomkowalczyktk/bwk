import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
position: relative;
`

const LeftArrow = styled.div `
  position: absolute;
  cursor: pointer;
  font-size: 40px;
  top:50%;
  transform: translateY(-50%);
  left:5px;
&:after {
  content : "<";
}
`;

const RightArrow = styled.div `
  position: absolute;
  cursor: pointer;
  font-size: 40px;
  top:50%;
  transform: translateY(-50%);
  right:5px;
&:after {
  content : ">";
}
`;

const FittedImage = styled.img `
width: 100%;
object-fit: cover;
`

const Magnifier = styled.div `
position: absolute;
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
border: 5px solid white;
left: 50%;
top: 50%;
transform: translate(-50%, -50%) rotate(-40deg);
opacity: 0.7;
&:hover {
  opacity: 1;
}
&:after {
  content : " ";
  width: 5px;
  height: 40px;
  position: absolute;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
}

`

export const MainPhoto = () => (
  <Wrapper>
    <LeftArrow/>
    <FittedImage src="https://picsum.photos/600/400?image=737"/>
    <Magnifier/>
    <RightArrow/>
  </Wrapper>
)
