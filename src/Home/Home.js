import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Navigate } from '../Navigate/Navigate';



const Hat = styled.div`
background-color: #226764;
height: 200px;
h1 {
  text-align: center;
  font-family: 'Monoton', cursive;
  color:white;
  font-size: 11vw;
  padding-top: 4vw;
  letter-spacing: 4px;
  font-weight: normal;
}
h1:hover {
  animation: change 6s ease-in-out 0s infinite alternate;
}
@keyframes change {
  0% {color:white;left:20%;top: 50%;font-size:11vw}
  20% {color:#63DC90}
  40% {color:#1EAEDB}
  60% {color:goldenrod}
  75% {color:#1EAEDB}
  85% {color:#63DC90}
  100% {color:white;left:50%;top: 60%;font-size:15vw}
}
`

const Header = (
    <Hat>
        <h1>Zep Maze!</h1>
        <Navigate/>
    </Hat>
);

const Shoe = styled.div`
font: Arial;
background: black;
color: white;
text-align: center;
padding-top: 5px;
position: absolute;
left: 0;
bottom: 0;
right: 0;
z-index: 5;
clear: both;
`

const Footer = (
    <Shoe>
        <p id="copyright">&copy;Joe Churchman 2017</p>
    </Shoe>
);

export default function Home(props) {
    return (
        <div>
            {Header}
                {props.children}
            {Footer}
        </div>
    );
}
