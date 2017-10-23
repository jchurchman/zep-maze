import * as actions from './Modal.constants';
import { combineReducers } from 'redux';

export default ( state = {}, action ) => combineReducers({modalIsOpen})(state, action);

export function modalIsOpen( state = false, action ) {
    switch(action.type) {
        case actions.OPENMODAL:
            return true;
        case actions.CLOSEMODAL:
            return false;
        default: return state;
    }
}