import React from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import reducer from './Controller.reducer';
import { WALL, FLOOR, START, END } from './Tile.constants';

const maze = {
    score: [],
    matrix: [
        [ WALL, WALL, WALL, WALL, WALL ],
        [ WALL, START, WALL, END, WALL ],
        [ WALL, FLOOR, WALL, FLOOR, WALL ],
        [ WALL, FLOOR, FLOOR, FLOOR, WALL ],
        [ WALL, WALL, WALL, WALL, WALL ],
    ]
}

describe('Controller component', () => {

	describe('reducer', () => {

		it('has a default value of x: 0, y: 0', () => {
			expect(reducer(undefined, {type: 'DUMMY' })).toEqual({ matrix: [], x: 1, y: 1});
        });
        
        it('goUP does nothing on invalid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 1}, goUP())).toEqual({ matrix: maze.matrix, x: 1, y: 1});
        });
        
        it('goUP moves coordinates on valid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 2}, goUP())).toEqual({ matrix: maze.matrix, x: 1, y: 1});
        });
        
        it('goDOWN moves coordinates on valid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 1}, goDOWN())).toEqual({ matrix: maze.matrix, x: 1, y: 2});
        });

        it('goDOWN does nothing on invalid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 3}, goDOWN())).toEqual({ matrix: maze.matrix, x: 1, y: 3});
        });
        
        it('goRIGHT does nothing on invalid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 1}, goRIGHT())).toEqual({ matrix: maze.matrix, x: 1, y: 1});
        });
        
        it('goRIGHT moves coordinates on valid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 3}, goRIGHT())).toEqual({ matrix: maze.matrix, x: 2, y: 3});
        });
        
        it('goLEFT does nothing on invalid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 1, y: 1}, goLEFT())).toEqual({ matrix: maze.matrix, x: 1, y: 1 });
        });
        
        it('goLEFT moves coordinates on valid move', () => {
            expect(reducer({ matrix: maze.matrix, x: 2, y: 3}, goLEFT())).toEqual({ matrix: maze.matrix, x: 1, y: 3 });
        });
	});
});