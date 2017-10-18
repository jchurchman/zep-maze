import React from 'react';
import styled from 'styled-components';

const Mat = styled.h1`
    text-align: center;
    margin: 4vw auto;
    font-size: 6vw;
    font-family: 'Audiowide', cursive, sans-serif;
    text-shadow: 1px 1px 6px #19647E
`

const Welcome = styled.p`
    margin: auto 4vw 4vw 4vw; 
    font-size: 3vw;
    text-align: justify;
`

export default function Home() {
    return (
        <div>
            <Mat>Welcome to Zep Maze!</Mat>
            <Welcome>Here you will find a puzzle maze game based loosely on the 1989 Epyx game Chip’s Challenge. Check back frequently for site updates and more mazes! In the meantime, click "Play" up above to get going.</Welcome>
        </div>
    );
}
