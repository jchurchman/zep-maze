import { combineReducers } from 'redux';
import status from './Controller/Controller.reducer';
import game from './MazeAPI/reducer';
import { modalIsOpen } from './Modal/Modal.reducer';

export default combineReducers({
	status,
	game,
	modalIsOpen
});