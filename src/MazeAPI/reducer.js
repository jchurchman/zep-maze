import * as actions from './constants';
import { combineReducers } from 'redux';


export default (state = {}, action) => combineReducers({mazes, maze, error, loading})(state,action);

export function mazes(state = [], action) {
    switch(action.type) {
        case actions.FETCHED_MAZES:
            return action.payload;
        case actions.ADDED_MAZE:
            return [ ...state, action.payload];
    default: return state;
    }
}

export function maze(state = null, action) {
    switch(action.type) {
        case actions.GOT_MAZE:
            return action.payload;
        default: return state;
    }
}

export function error( state = null, action) {
    switch(action.type) {
        case actions.GOT_MAZE_ERROR:
        case actions.ADDING_MAZE_ERROR:
        case actions.FETCHED_MAZES_ERROR:
            return action.payload;
        case actions.GETTING_MAZE:
        case actions.FETCHED_MAZES:
        case actions.ADDING_MAZE:
            return null;
        default: return state;
    }
}

export function loading( state = false, action) {
    switch(action.type) {
        case actions.FETCHING_MAZES:
        case actions.GETTING_MAZE:
        case actions.ADDING_MAZE:
            return true;
        case actions.GOT_MAZE:
        case actions.FETCHED_MAZES:
        case actions.ADDED_MAZE:
            return false;
        default: return state;
    }
}