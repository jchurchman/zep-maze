import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMazes, getOneMaze, addMaze } from '../MazeAPI/MazeAPI.actions';

import MazePlayer from './MazePlayer';


function mapStateToProps(state) {
    return {
        mazes: state.mazes,
        position: state.position
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getMazes());
    return bindActionCreators({ getMazes, getOneMaze, addMaze }, dispatch);
}

const MazePlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MazePlayer);

export default MazePlayerContainer;