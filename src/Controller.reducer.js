import { UP, DOWN, LEFT, RIGHT } from './Controller.constants';

export default ( state = { matrix: [], x: 0, y: 0 }, { type, payload }) => {
	switch(type) {
        case UP:
            return {
                ...state,
                x: state.x,
                y: state.y + 1
            };
        case DOWN:
            return {
                ...state,
                x: state.x,
                y: state.y - 1
            }
        case RIGHT: 
            return {
                ...state,
                x: state.x + 1,
                y: state.y
            };
        case LEFT:
            return {
                ...state,
                x: state.x - 1,
                y: state.y
            };
        default:
            return state;
	}
};