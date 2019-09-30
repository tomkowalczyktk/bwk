import React from 'react';
import './spinner.scss';
import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  &__img {
    display: inline-block;
    margin: auto;
    width: 60px;
    height: 60px;
    background-color: lightcyan;
    background-image: url("../../images/logo-mobile.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    border-radius: 50%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px dashed black;
      animation: mymove 5s infinite linear;

      @keyframes mymove {
        0% {
          transform: rotate(0deg) scale(1);
          box-shadow: 2px 0 10px ${({ color }) => color};
        }
        50% {
          transform: rotate(180deg) scale(1.3);
          box-shadow: 2px 0 20px ${({ color }) => color};
        }
        100% {
          transform: rotate(360deg) scale(1);
          box-shadow: 2px 0 10px ${({ color }) => color};
        }
      }
    }
  }

`


export default function LoadingSpinner({ color }) {
  return (
    <Spinner color={color}>
      <div className='spinner__img'></div>

    </Spinner>
  )
}