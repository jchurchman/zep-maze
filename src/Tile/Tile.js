import React from 'react';
import { FLOOR, WALL, START, END } from './Tile.constants';
import styles from './Tile.css';

export function Tile({ value }) {
    switch(value) {
        case WALL: return (<td className={styles.wall}></td>);
        case FLOOR: return (<td className={styles.floor}></td>);
        case START: return (<td className={styles.floor}>{START}</td>);
        case END: return (<td className={styles.floor}>{END}</td>);
        default: return (<td></td>);
    }
}