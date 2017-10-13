import { MODALVIEW, RETURN, NEXT } from './Modal.constants';

export function openModal() {
    return dispatch => {
        dispatch({
            type: MODALVIEW
        })
    }
}

export function returnToMaze() {
    return dispatch => {
        dispatch({
            type: RETURN
        })
    }
}

export function nextMaze() {
    return dispatch => {
        dispatch({
            type: NEXT
        })
    }
}