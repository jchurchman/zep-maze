import * as actions from './constants';

export function maze(state = [], action) {
    switch(action.type) {
        case actions.FETCHING_MAZE:
            return action.payload;
        case actions.ADDING_MAZE:
            return [ ...state, action.payload];
        default: return state;
    }
}

export function mazeError( state = null, action) {
    switch(action.type) {
        case actions.FETCHED_MAZE_ERROR:
        case actions.ADDING_MAZE_ERROR:
            return action.payload;
        case actions.FETCHING_MAZE:
        case actions.ADDING_MAZE:
            return null;
        default: return state;
    }
}

export function mazeLoading( state = false, action) {
    switch(action.type) {
        case actions.FETCHING_MAZE:
        case actions.ADDING_MAZE:
            return true;
        case actions.FETCHED_MAZE:
        case actions.ADDED_MAZE:
            return false;
        default: return state;
    }
}