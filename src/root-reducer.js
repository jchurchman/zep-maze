import { combineReducers } from 'redux';
import { position, gamestate } from './Controller/Controller.reducer';

export default combineReducers({
	position,
	gamestate/*,
    maze*/
});