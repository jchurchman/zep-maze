import { MOVE, GAME_OVER, GAME_WIN, RESET_MAZE } from './Controller.constants';
import { combineReducers } from 'redux';

export default ( state = {}, action ) => combineReducers({ position, activity })(state, action);

export const position = (state = [ 1, 1 ], { type, payload }) => {
	switch(type) {
	case MOVE:
		return payload;
	case RESET_MAZE:
		return [ 1, 1 ];
	default: 
		return state;
	}
};

export const activity = (state = 'PLAYING', { type, payload }) => {
	switch(type) {
	case GAME_OVER:
		return;
	case RESET_MAZE:
		return 'PLAYING';
	case GAME_WIN:
		return payload;
	default:
		return state;
	}
};
