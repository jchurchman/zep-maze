import { goUP, goDOWN, goRIGHT, goLEFT } from '../Controller/Controller.actions';
import { MOVE } from '../Controller/Controller.constants';

describe('Controller action creators', () => {

	function actionTest(title, creator, initial, expected) {
		
		it(title, () => {
			creator()(
				(action) => {
					expect(action.type).toBe(MOVE);
					expect(action.payload).toEqual(expected)
				},
				() => ({ position: initial})
			)
			
		});
	}

	actionTest('goUP decreases Y', goUP, [ 0, 0 ], [ 0, -1 ])
	actionTest('goDOWN increases Y', goDOWN, [ 0, 0 ], [ 0, 1 ])
	actionTest('goLEFT decreases X', goLEFT, [ 0, 0 ], [ -1, 0 ])
	actionTest('goRIGHT increases X', goRIGHT, [ 0, 0 ], [ 1, 0 ])
});
