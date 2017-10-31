import { OPENMODAL, CLOSEMODAL, RETURN, NEXT } from './Modal.constants';

export function openModal() {
    return dispatch => {
        dispatch({
            type: OPENMODAL
        })
    }
}

export function closeModal() {
    return dispatch => {
        dispatch({
            type: CLOSEMODAL
        })
    }
}

