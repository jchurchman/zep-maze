import React, { Component } from 'react';
import { Tile } from '../Tile/Tile';
import { connect } from 'react-redux';
import styles from './MazeMapper.css';

export class MazeMapper extends Component{

    constructor(props){
        super(props);
    }    
    
    // componentDidMount() {
    //     fetch('/api/mazes')
    //         .then(res => res.json())
    //         .then(mazes => mazes[0].matrix = this.state.matrix);
    // }

    render() {

        const { position, maze } = this.props;

        // const matrix = maze.matrix;
        
        const xVal = position[0] * 44;
        const yVal = position[1] * 44;
        
        const transform = `transform: translate( ${ xVal }px, ${ yVal }px )`;

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

export default connect(state => ({
    position: state.position,
    gamestate: state.gamestate,
    maze: state.maze,
    loading: state.loading,
    error: state.error
}))(MazeMapper);