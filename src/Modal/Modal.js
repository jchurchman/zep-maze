import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 500;
`

const Fore = styled.div`
    position: relative;
    top: 33%;
    left: 30%;
    background-color: #DCDCDC;
    width: 40%;
    height: 33%;
    opacity: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    p:first-of-type {
        position: absolute;
        top: 2%;
        right: 2%;
        color: black;
        font-size: 16px;
        height: 12px;
        line-height: 60%;
        border: 2px solid black;
        padding: 3px;
        border-radius: 10px;
    }
`

const ButtonBar = styled.div`
    position: absolute;
    bottom: 2%;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const ModalButton = styled.button`
    background-color: #226764;
    margin: .3vw;
    padding: .5vw;
    width: 30%;
    height: 5vw;
    border: 4px outset #D0AC4C;
    border-radius: 8px;
    font-size: 2vw;
    color: #D0AC4C;
`

export default function Modal(props) {
    const {     modalIsOpen, 
                closeModal, 
                resetMaze, 
                getNextMaze,
                game } = props;

    const { mazes, maze } = game;

    const thisMaze = mazes.findIndex(m => m._id === maze._id)
    const nextMazesMaze = mazes[thisMaze + 1] || mazes[0];
    const nextMazeId = nextMazesMaze._id

    if (modalIsOpen) {
        return (
            <Back>
                <Fore>
                    <p className="close" onClick={() => closeModal()} >x</p>
                    {props.children}
                    <ButtonBar>
                        <ModalButton onClick={() => {
                            closeModal()
                            resetMaze()
                        }}>Restart</ModalButton>
                        <ModalButton onClick={() => {
                            closeModal()
                            getNextMaze(nextMazeId)
                            resetMaze()
                        }}>Next</ModalButton>
                    </ButtonBar>
                </Fore>
            </Back>
    )} else { return null }
}