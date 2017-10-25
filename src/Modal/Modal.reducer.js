import * as actions from './Modal.constants';

export const modalIsOpen = ( state = false, action ) => {
    switch(action.type) {
        case actions.OPENMODAL:
            return true;
        case actions.CLOSEMODAL:
            return false;
        default: return state;
    }
}