import { UP, DOWN, LEFT, RIGHT } from './Controller.constants';
import { WALL, FLOOR, START, END } from '../Tile/Tile.constants';


export function goUP() {
    return (dispatch, getState) => {
        const { position } = getState();
        dispatch({
            type: MOVE,
            payload: [position[0], position[1] - 1]
        });
    }
}

export function goDOWN() {
    return {
        type: DOWN,
        payload: null
    };
}

export function goRIGHT() {
    return {
        type: RIGHT,
        payload: null
    };
}

export function goLEFT() {
    return {
        type: LEFT,
        payload: null
    };
}