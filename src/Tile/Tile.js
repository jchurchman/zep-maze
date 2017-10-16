import React from 'react';
import styled from 'styled-components';

const Square = styled.td`
    height: 20vw;
    width: 20vw;
    box-sizing: border-box;
    border: 4px outset #a9a9a9;
    text-align: center;
    vertical-align: middle;
`

export function Tile({ value = '' }) {
    return (
        <Square className={`${value.toLowerCase()}`}>
        </Square>
    );
}