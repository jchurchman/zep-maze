import * as actions from './constants';
import api from './MazeAPI';

export function makeGetMazes(api) {
	return function() {
		return function(dispatch) {
			dispatch({ type: actions.FETCHING_MAZES });

			return api.getAll()
				.then(
					mazes => {
						dispatch({ type: actions.FETCHED_MAZES, payload: mazes });
					}, 
					error => {
						dispatch({ type: actions.FETCHED_MAZE_ERROR, payload: error.error });
					}
				);
		};
	};
}

export const getMazes = makeGetMazes(api);

export const makeAddMaze = api => maze => dispatch => {

	dispatch({ type: actions.ADDING_MAZE });

	return api.add(maze)
		.then(
			saved => {
				dispatch({ type: actions.ADDED_MAZE, payload: saved });
			},
			err => {
				dispatch({ type: actions.ADDING_MAZE_ERROR, payload: err });
			}
		);
};

export const addMaze = makeAddMaze(api);

export const makeGetOneMaze = api => id => dispatch => {
	dispatch({ type: actions.FETCHING_MAZE });

	return api.get(id)
		.then(
			maze => {
				dispatch({ type: actions.FETCHED_MAZE, payload: maze });
			},
			err => {
				dispatch({ type: actions.FETCHED_MAZE_ERROR, payload: err });
			}
		);
};

export const getOneMaze = makeGetOneMaze(api);