import { UP, DOWN, LEFT, RIGHT } from './Controller.constants';

export default ( state = { matrix: [], x: 1, y: 1 }, { type, payload }) => {
	switch(type) {
	case UP:
		if(state.matrix[ state.y-1][state.x] === 'WALL') return state;
		return {
			matrix: state.matrix,
			x: state.x,
			y: state.y - 1
		};
	case DOWN:
		if(state.matrix[state.y+1][state.x] === 'WALL') return state;
		return {
			matrix: state.matrix,
			x: state.x,
			y: state.y + 1
		};
	case RIGHT:
		if(state.matrix[state.y][state.x+1] === 'WALL') return state;
		return {
			matrix: state.matrix,
			x: state.x + 1,
			y: state.y
		};
	case LEFT:
		if(state.matrix[state.y][state.x-1] === 'WALL') return state;
		return {
			matrix: state.matrix,
			x: state.x - 1,
			y: state.y
		};
	default:
		return state;
	}
};