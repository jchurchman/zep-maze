import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMazes, getOneMaze, addMaze } from '../MazeAPI/MazeAPI.actions';

import MazePlayer from './MazePlayer';


function mapStateToProps(state) {
    return {
        maze: state.maze,
        position: state.position,
        loading: state.loading,
        error: state.error,
        gamestate: state.gamestate
    };
}

function mapDispatchToProps(dispatch) {
    // dispatch(getMazes());
    dispatch(getOneMaze('59b0341d64889f1fd460af86'));
    return bindActionCreators({ getMazes, getOneMaze, addMaze }, dispatch);
}

const MazePlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MazePlayer);

export default MazePlayerContainer;