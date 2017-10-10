import { MOVE, GAME_OVER, GAME_WIN } from './Controller.constants';

export const position = (state = [ 1, 1 ], { type, payload }) => {
	switch(type) {
	case MOVE:
		return payload;		
	default: 
		return state;
	}
};

export const gamestate = (state = 'ACTIVE', { type, payload }) => {
	switch(type) {
	case GAME_OVER:
		return;
	case GAME_WIN:
		return payload;
	default:
		return state;
	}
};
