import { combineReducers } from 'redux';
import { position, gamestate } from './Controller/Controller.reducer';
import { maze, mazeError, mazeLoading } from './MazeAPI/reducer';

export default combineReducers({
	position,
	gamestate,
	maze,
	mazeError,
	mazeLoading
});