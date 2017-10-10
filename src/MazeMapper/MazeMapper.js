import React, { Component } from 'react';
import { Tile } from '../Tile/Tile';
import styles from './MazeMapper.css';

export default class MazeMapper extends Component{

    render() {
        const { position, maze } = this.props;


        const xVal = (position[0] - 1) * -48;
        const yVal = (position[1] - 1) * -48;
        
        const transform = `translate( ${ xVal }px, ${ yVal }px )`;

        return (
            <table className={styles.maze} style={{transform}}>
                <tbody>
                    {maze.matrix.map( ( row, index ) => {
                        return (
                            <tr key={index}>
                            {row.map( ( tile, index ) => {
                                return <Tile key={index} value={tile}/>
                            })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )}
}