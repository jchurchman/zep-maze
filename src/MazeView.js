import React from 'react';
import styles from './MazeView.css';
import MazeBuilder from './MazeBuilder';
import Avatar from './Avatar';



export function MazeView() {
    return (
        <div className={styles}>
            <MazeBuilder />
            <Avatar />
        </div>
    )
}