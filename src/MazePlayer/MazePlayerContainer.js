import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMazes, getOneMaze, addMaze } from '../MazeAPI/MazeAPI.actions';

import MazePlayer from './MazePlayer';


function mapStateToProps(state) {
    return {
        game: state.game,
        status: state.status
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getOneMaze('59b033f164889f1fd460af85'));
    return bindActionCreators({ getMazes, getOneMaze, addMaze }, dispatch);
}

const MazePlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MazePlayer);

export default MazePlayerContainer;