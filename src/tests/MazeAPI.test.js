import { 
    makeAddMaze, 
    makeGetOneMaze 
    } from '../MazeAPI/MazeAPI.actions';
import { 
    FETCHED_MAZE, 
    FETCHING_MAZE,
    FETCHED_MAZE_ERROR,
    ADDED_MAZE,
    ADDING_MAZE,
    ADDING_MAZE_ERROR
    } from '../MazeAPI/constants';

describe('getOneMaze', () => {

    it('successful get one maze', () => {

        const maze = {};
        const api = { get: () => Promise.resolve(maze) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const getOneMaze = makeGetOneMaze(api);
        return getOneMaze()(dispatch)
            .then( () => {
                expect(dispatched).toEqual([
                    { type: FETCHING_MAZE },
                    { type: FETCHED_MAZE, payload: maze }
                ]);
            });
    });

    it('failed get maze', () => {
        const error = 'the error';
        const api = { get: () => Promise.reject({ error }) };
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const getOneMaze = makeGetOneMaze(api);
        return getOneMaze()(dispatch)
            .then( () => {
                expect(dispatched).toEqual([
                    { type: FETCHING_MAZE },
                    { type: FETCHED_MAZE_ERROR, payload: {error: 'the error'} }
                ]);
            });
    });

});