import { connect } from 'react-redux';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';

import Controller from './Controller';

function mapStateToProps(state){
	return {};
}

function mapDispatchToProps(dispatch) {
    return { 
		goUP() { dispatch(goUP());},
		goDOWN() {dispatch(goDOWN());}, 
		goRIGHT() {dispatch(goRIGHT());}, 
		goLEFT() { dispatch(goLEFT());}
	};
}

const ControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);

export default ControllerContainer;