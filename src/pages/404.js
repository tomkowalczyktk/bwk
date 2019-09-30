import React from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons';



const Main = styled.main`
margin:0;
background-color: black;
height: 100vh;
width: 100%;
`

const H1 = styled.h1`
color:red;
font-weight:800;
opacity:.4;
text-align:center;
margin:60px auto;
position:relative;
::before {
  content:'Nie znaleziono takiej strony!!!';
  position:absolute;
  top:2px;
  margin-left:2px;
  color:rgba(0 0 0 .4);
}
`
const Sign = styled.div`
width: 60px;
height: 60px;
text-justify:center;
text-align:center;
margin:100px auto;
svg{
  font-size:60px; 
  color:#f7d317;
  margin: 70px auto;
}
`
const StyledLink = styled.div`
font-size:18px;
color:blue;
font-weight:600;
font-style:italic;
display:flex;
justify-content:center;
margin:70px auto;
:hover{
  text-shadow: 2px 0  5px;
}
`





const NotFoundPage = () => (
  <Main>
    <Sign ><FontAwesomeIcon icon={faSadCry} /></Sign>
    <H1>Nie znaleziono takiej strony!!!</H1>
    <LoadingSpinner color="red" />

    <StyledLink as={Link} to='/'>Zabierz mnie do strony głównej.</StyledLink>
  </Main>
)

export default NotFoundPage
