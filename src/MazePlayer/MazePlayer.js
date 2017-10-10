import React from 'react';
import styles from './MazePlayer.css';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';
import ControllerContainer from '../Controller/ControllerContainer';
import styled from 'styled-components';

const Player = styled.div`
    margin: 20px auto;
`

const Viewport = styled.div`
    width: 146px;
    height: 146px;
    overflow: hidden;
    position: relative;
    margin: auto;
    border: 2px solid orange;
`

export default function MazePlayer({ game, position, gamestate }) {
    const { maze, error, loading } = game;

    if( loading || !maze ) return <div>Loading Mazes...</div>;
    if (error) return <div>There was an error loading this maze, try refreshing the page</div>;

    return (

        <Player>
            <Viewport>
                <Avatar />
                <MazeMapper maze={maze} position={position}/>
            </Viewport>
            <ControllerContainer />
        </Player>
    )
}