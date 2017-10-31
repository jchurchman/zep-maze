import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMazes, getOneMaze } from '../MazeAPI/MazeAPI.actions';

import MazePlayer from './MazePlayer';


function mapStateToProps(state) {
    return {
        game: state.game,
        status: state.status
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(fetchMazes());
    return bindActionCreators({ fetchMazes, getOneMaze }, dispatch);
}

const MazePlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MazePlayer);

export default MazePlayerContainer;