import React from 'react';
import styles from './MazeView.css';


export function MazeView(props) {
    return (
        <div className={styles.viewer}>
            {props.children}
        </div>
    )
}