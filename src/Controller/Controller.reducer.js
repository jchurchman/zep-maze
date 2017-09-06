import { MOVE, GAME_OVER, GAME_WIN } from './Controller.constants';

export const position = (state = [ 0, 0 ], { type, payload }) => {
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
			return payload;
		case GAME_WIN:
			return payload;
		default:
			return state;
	}
};

// export default ( state = { matrix: maze.matrix, x: 1, y: 1 }, { type }) => {
// 	switch(type) {
// 	case UP:
// 		if(state.matrix[ state.y-1][state.x] === 'WALL') return state;
// 		return {
// 			matrix: state.matrix,
// 			x: state.x,
// 			y: state.y - 1
// 		};
// 	case DOWN:
// 		if(state.matrix[state.y+1][state.x] === 'WALL') return state;
// 		return {
// 			matrix: state.matrix,
// 			x: state.x,
// 			y: state.y + 1
// 		};
// 	case RIGHT:
// 		if(state.matrix[state.y][state.x+1] === 'WALL') return state;
// 		return {
// 			matrix: state.matrix,
// 			x: state.x + 1,
// 			y: state.y
// 		};
// 	case LEFT:
// 		if(state.matrix[state.y][state.x-1] === 'WALL') return state;
// 		return {
// 			matrix: state.matrix,
// 			x: state.x - 1,
// 			y: state.y
// 		};
// 	default:
// 		return state;
// 	}
// };