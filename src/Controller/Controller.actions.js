import { UP, DOWN, LEFT, RIGHT } from './Controller.constants';


export function goUP() {
    return {
        type: UP,
        payload: null
    };
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