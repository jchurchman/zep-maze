import React from 'react';
import  { emojify } from 'react-emojione';
import styled from 'styled-components';

const Sprite = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
`

export default function Avatar() {
    
    return ( 
        <Sprite> 
            {emojify(':wink:', { style: {top: 0}})} 
        </Sprite>
    );
}
