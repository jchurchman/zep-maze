import assert from 'assert';
import * as actions from '../MazeAPI/MazeAPI.actions';
import mazeAPI, { maze, error, loading } from '../MazeAPI/reducer';

const testPassThru = reducer => {
    it('pass-thru', () => {
        const state = {};
        assert[operator](reducer(state, { type: 'NO_ACTION' }), state);
    });
};

const testInit = (reducer, expected) => {
    it('initial value', () => {
        assert.deepEqual(reducer(undefined, { type: 'NO_ACTION' }), initial);
    });
};

const testPassThruAndInit = (reducer, initial, { operator = 'strictEqual' } = {}) => {
    it('pass-thru', () => {
        const state = {maze: null, error: null, loading: false};
        assert[operator](reducer(state, { type: 'NO_ACTION' }), state);
    })

    it('initial value', () => {
        assert[operator](reducer(undefined, { type: 'NO_ACTION' }), initial);
    });
};

describe('mazeAPI combined reducer', () => {
    testPassThruAndInit(mazeAPI, 
    { maze: null, error: null, loading: false }, 
    {operator: 'deepEqual'})
})