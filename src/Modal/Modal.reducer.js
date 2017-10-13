import * as actions from './Modal.constants';
import { combineReducers } from 'redux';

export default ( state = {}, action ) => combineReducers({modalIsOpen})(state, action);

export function modalIsOpen( state = false, action ) {
    switch(action.type) {
        case actions.MODALVIEW:
            return true;
        case actions.RETURN:
        case actions.NEXT:
            return false;
        default: return state;
    }
}