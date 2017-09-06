import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';

import Controller from './Controller';

function mapStateToProps(state){

	return {
		mazes: state.mazes,
		position: state.position
	};

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ goUP, goDOWN, goRIGHT, goLEFT }, dispatch );
}

const ControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);

export default ControllerContainer;