import React from 'react';
import styled from 'styled-components';
import { Navigate } from '../Navigate/Navigate';



const Hat = styled.div`
background-color: #226764;
h1 {
  text-align: center;
  font-family: 'Monoton', cursive;
  color:white;
  font-size: 11vw;
  padding-top: 2vw;
  letter-spacing: 4px;
  font-weight: normal;
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
