import React from 'react';
import { Tile } from './Tile';

export function MazeBuilder({ matrix }) {
    return (
        <table>
            {matrix.map( ( row, index ) => {
                return (
                    <tr key={index}>
                        {row.map( ( tile, index ) => {
                            return <Tile key={index} value={tile}/>
                        })}
                    </tr>
                )
            })}
        </table>
    )
}