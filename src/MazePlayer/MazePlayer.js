import React from 'react';
import styles from './MazePlayer.css';
import MazeMapper from '../MazeMapper/MazeMapper';
import Avatar from '../Avatar/Avatar';
import ControllerContainer from '../Controller/ControllerContainer';

export default function MazePlayer({ game, position, gamestate }) {
    const { maze, error, loading } = game;

    if( loading || !maze ) return <div>Loading Mazes...</div>;
    if (error) return <div>There was an error loading this maze, try refreshing the page</div>;

    return (

        <div className={styles.player}>
            <div className="viewport">
                <Avatar />
                <MazeMapper maze={maze} position={position}/>
            </div>
            <ControllerContainer maze={maze} position={position} />
        </div>
    )
}