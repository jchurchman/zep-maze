import * as actions from './constants';
import { combineReducers } from 'redux';


export default (state = {}, action) => combineReducers({maze, error, loading})(state,action);

export function maze(state = null, action) {
    switch(action.type) {
        case actions.FETCHED_MAZE:
            return action.payload;
        case actions.ADDED_MAZE:
            return [ ...state, action.payload];
        default: return state;
    }
}

export function error( state = null, action) {
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

export function loading( state = false, action) {
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