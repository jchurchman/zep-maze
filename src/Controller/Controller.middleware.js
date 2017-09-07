import { MOVE, GAME_OVER, GAME_WIN } from './Controller.constants';
import { WALL, END } from '../Tile/Tile.constants';

export const moveChecker = ({dispatch, getState }) => next => action => {
	if(action.type !== MOVE ) return next(action);

	const { maze } = getState();
	const [x, y] = action.payload;
	const tile = maze.matrix[y][x];  
	if(!tile || tile === WALL) return;
	if(tile === END) {
		next(action);
		next({ type: GAME_WIN, payload: 'SOLVED' });
		return;
	}
	// if(tile === FIRE) return next({ type: GAME_OVER });
  
	// if(tile === DOOR) {
	//   const { inventory } = store.getState();
	//   const index = inventory.indexOf(KEY);
	//   if(index === -1) return;

	//   next({ type: USE_INVENTORY, payload: index });
	//   next({ type: CHANGE_TILE, payload: [x, y] });
	// }

	next(action);

};