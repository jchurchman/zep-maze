import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.1
`

const Fore = styled.div`
    margin: auto;
    width: 35%;
    height: 35%;
    background-color: slateGray
    .close {
        position: absolute;
        top: 2%;
        right: 2%;
        color: black;
        font-size: 16
        border: 2px solid black;
        padding: 3px;
        border-radius: 10px;
    }
`

export default function Modal(props) {
    const { modalIsOpen, closeModal, restartMaze, nextMaze } = props;

    if (modalIsOpen) {
        return (
            <Back>
                <Fore>
                    <p className="close" onClick={() => closeModal()} >X</p>
                    {props.children}
                    <button onClick={() => {
                        closeModal()
                        restartMaze()
                    }}>Restart Maze</button>
                    <button onClick={() => {
                        closeModal()
                        nextMaze()
                    }}>Next Maze</button>
                </Fore>
            </Back>
    )} else { return null }
}