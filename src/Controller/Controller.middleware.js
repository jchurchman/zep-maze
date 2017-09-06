import { MOVE, GAME_OVER, GAME_WIN } from './Controller.constants';
import { WALL, END } from '../Tile/Tile.constants';

export const moveChecker = store => next => action => {
  if(action.type !== MOVE ) return next(action);

  const { matrix: maze } = store.getStore();
  const [x, y] = action.payload;
  const tile = maze[y][x];  
  if(!tile || tile === WALL) return;
  if(tile === END) return next({ type: GAME_WIN });
  // if(tile === FIRE) return next({ type: GAME_OVER });
  
  // if(tile === DOOR) {
  //   const { inventory } = store.getState();
  //   const index = inventory.indexOf(KEY);
  //   if(index === -1) return;

  //   next({ type: USE_INVENTORY, payload: index });
  //   next({ type: CHANGE_TILE, payload: [x, y] });
  // }

  next(action);

}