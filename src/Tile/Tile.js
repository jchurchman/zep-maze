import React from 'react';
import styles from './Tile.css';

export function Tile({ value = '' }) {
    return (
        <td className={`${styles.tile} ${value.toLowerCase()}`}>
        </td>
    );
}