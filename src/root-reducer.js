import { combineReducers } from 'redux';
import { position, gamestate } from './Controller/Controller.reducer';
import game from './MazeAPI/reducer';

export default combineReducers({
	position,
	gamestate,
	game,
});