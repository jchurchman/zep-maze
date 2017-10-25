import React from 'react';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';
import ModalContainer from '../Modal/ModalContainer';
import ControllerContainer from '../Controller/ControllerContainer';
import styled from 'styled-components';

const Player = styled.div`
    margin: 4vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Viewport = styled.div`
    width: 48vw;
    height: 48vw;
    overflow: hidden;
    position: relative;
    margin: auto;
    border: 6px outset #D0AC4C;
`

export default function MazePlayer({ game, status }) {
    const { maze, error, loading } = game;
    const { position } = status;

    if( loading || !maze ) return <div>Loading Mazes...</div>;
    if (error) return <div>There was an error loading this maze, try refreshing the page</div>;

    return (

        <Player>
            <Viewport>
                <Avatar />
                <MazeMapper maze={maze} position={position}/>
            </Viewport>
            <ModalContainer>
                <p>Congratulations, you solved the maze!</p>
            </ModalContainer>
            <ControllerContainer />
        </Player>
    )
}