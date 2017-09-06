import { connect } from 'react-redux';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';

import Controller from './Controller';

function mapStateToProps(state){

	return {
		mazes: state.mazes,
		position: state.position
	};

}

function mapDispatchToProps() {
    return { goUP, goDOWN, goRIGHT, goLEFT };
}

const ControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);

export default ControllerContainer;