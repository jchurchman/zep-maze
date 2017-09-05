import React, { Component } from 'react';
import { Tile } from '../Tile/Tile';
import { connect } from 'react-redux';

export class MazeBuilder extends Component{

    constructor(props){
        super(props);
    }    
    
    // componentDidMount() {
    //     fetch('/api/mazes')
    //         .then(res => res.json())
    //         .then(mazes => mazes[0].matrix = this.state.matrix);
    // }

    render() {

        const { x, y, matrix } = this.props;

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
    )}
}

export default connect(state => ({
    matrix: state.matrix,
    x: state.x,
    y: state.y
}))(MazeBuilder);