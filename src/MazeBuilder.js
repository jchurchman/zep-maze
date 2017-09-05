import React from 'react';
import { Tile } from './Tile';

export function MazeBuilder({ matrix, x, y }) {

    const xVal = x * 40;
    const yVal = y * 40

    const styles = {
        transform: `transform: translate( ${ xVal }px, ${ yVal }px )`
    }

    return (
        <table className={"Maze"} style={styles}>
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