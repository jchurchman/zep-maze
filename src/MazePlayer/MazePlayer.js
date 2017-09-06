import React from 'react';
import styles from './MazePlayer.css';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';
import ControllerContainer from '../Controller/ControllerContainer';

export default function MazePlayer({ mazes, loading, error, position}) {

    if(loading) return <div>Loading Mazes...</div>;

    return (
        <div>
            <MazeMapper />
            <Avatar />
            <ControllerContainer />
        </div>
    )
}