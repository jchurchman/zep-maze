import { MOVE, RESET_MAZE } from './Controller.constants';

export function goUP() {
	return (dispatch, getState) => {
		const { status } = getState();
		const { position } = status;
		dispatch({
			type: MOVE,
			payload: [position[0], position[1] - 1]
		});
	};
}

export function goDOWN() {
	return (dispatch, getState) => {
		const { status } = getState();
		const { position } = status;
		dispatch({
			type: MOVE,
			payload: [position[0], position[1] + 1]
		});
	};
}

export function goRIGHT() {
	return (dispatch, getState) => {
		const { status } = getState();
		const { position } = status;
		dispatch({
			type: MOVE,
			payload: [position[0] + 1, position[1] ]
		});
	};
}

export function goLEFT() {
	return (dispatch, getState) => {
		const { status } = getState();
		const { position } = status;
		dispatch({
			type: MOVE,
			payload: [ position[0] - 1, position[1] ]
		});
	};
}

export function resetMaze() {
	return dispatch => {
		dispatch({
			type: RESET_MAZE
		})
	}
}