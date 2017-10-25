import { goUP, goDOWN, goRIGHT, goLEFT } from '../Controller/Controller.actions';
import { MOVE } from '../Controller/Controller.constants';
import { position, gamestate } from '../Controller/Controller.reducer';
import assert from 'assert';

const testPassThruAndInit = (reducer, initial, { operator = 'strictEqual' } = {}) => {
    it('pass-thru', () => {
        const state = { position: [0,0], gamestate: 'PLAYING'};
        assert[operator](reducer(state, { type: 'NO_ACTION' }), state);
    })

    it('initial value', () => {
        assert[operator](reducer(undefined, { type: 'NO_ACTION' }), initial);
    });
};


const testPassThru = (reducer, operator = 'strictEqual') => {
    it('pass-thru', () => {
        const state = {};
        assert[operator](reducer(state, { type: 'NO_ACTION' }), state);
    });
};

const testInit = (reducer, expected, initial) => {
    it('initial value', () => {
        assert.deepEqual(reducer(undefined, { type: 'NO_ACTION' }), initial);
    });
};

testPassThruAndInit(position, [1,1] , {operator: 'deepEqual'})

describe('Controller', () => {
	describe('action creators', () => {
	
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

	describe('position reducer', () => {
		testPassThru(position);
		testInit(position, null, [1,1]);

		it('changed positions', () => {
			const newPosition = { position: [1,3] }
			assert.deepEqual(position(null, {
				type: 'MOVE',
				payload: newPosition
			}), newPosition)
		})
	})
	
	describe('gamestate reducer', () => {
		testPassThru(gamestate);
		testInit(gamestate, null, 'PLAYING');

		it('changed gamestates', () => {
			const newGameState = { gamestate: 'GAME_WIN' }
			assert.deepEqual(gamestate(null, {
				type: 'GAME_WIN',
				payload: newGameState
			}), newGameState)
		})
	})
});