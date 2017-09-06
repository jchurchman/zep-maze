import React from 'react';
import styles from './MazePlayer.css';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';
import ControllerContainer from '../Controller/ControllerContainer';

export default function MazePlayer({ maze, loading, error, position, gamestate }) {

    if(loading || !maze) return <div>Loading Mazes...</div>;

    return (
        <div className={styles.player}>
            <div className="viewport">
                <MazeMapper maze={maze} position={position}/>
                <Avatar />
            </div>
            <ControllerContainer maze={maze} position={position} />
        </div>
    )
}