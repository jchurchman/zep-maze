import { combineReducers } from 'redux';
import { position, gamestate } from './Controller/Controller.reducer';
import { maze, error, loading } from './MazeAPI/reducer';

export default combineReducers({
	position,
	gamestate,
	maze,
	error,
	loading
});