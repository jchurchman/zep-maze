import React from 'react';
import { FLOOR, WALL, START, END } from './Tile.constants';
import styles from './Tile.css';

export function Tile({ value = '' }) {
    return (
        <td className={`${styles.tile} ${value.toLowerCase()}`}>
        </td>
    );
}