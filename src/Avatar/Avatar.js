import React from 'react';
import styled from 'styled-components';

const Sprite = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    font-size: 15vw;
`

const transform = `translate(0.6vw, -0.4vw)`;

export default function Avatar() {
    
    return ( 
        <Sprite>
            <span style={{transform}} role="img" aria-label="neutral face">😐</span>
        </Sprite>
    );
}
