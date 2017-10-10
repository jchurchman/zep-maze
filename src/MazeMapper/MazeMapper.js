import React, { Component } from 'react';
import { Tile } from '../Tile/Tile';
import styled from 'styled-components';

const Maze = styled.table`
    border-collapse: collapse;
    width: max-content;
`

export default class MazeMapper extends Component{

    render() {
        const { position, maze } = this.props;


        const xVal = (position[0] - 1) * -48;
        const yVal = (position[1] - 1) * -48;
        
        const transform = `translate( ${ xVal }px, ${ yVal }px )`;

        return (
            <Maze style={{transform}}>
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
            </Maze>
    )}
}