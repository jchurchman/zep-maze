import * as actions from './constants';
import api from './MazeAPI';

export const makeFetchMazes = api => dispatch => {
		return function(dispatch) {
			dispatch({ type: actions.FETCHING_MAZES });

			return api.getAll()
				.then(
					mazes => {
						dispatch({ type: actions.FETCHED_MAZES, payload: mazes });
						dispatch(getOneMaze(mazes[0]._id))
					}, 
					error => {
						dispatch({ type: actions.FETCHED_MAZES_ERROR, payload: error.error });
					}
				);
		};
}

export const fetchMazes = makeFetchMazes(api);

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
	dispatch({ type: actions.GETTING_MAZE });

	return api.get(id)
		.then(
			maze => {
				dispatch({ type: actions.GOT_MAZE, payload: maze });
			},
			err => {
				dispatch({ type: actions.GOT_MAZE_ERROR, payload: err });
			}
		);
};

export const getOneMaze = makeGetOneMaze(api);