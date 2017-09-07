import React from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from '../Controller/Controller.actions';
import { position } from '../Controller/Controller.reducer';
import { WALL, FLOOR, START, END } from '../Tile/Tile.constants';

const maze = {
	score: [],
	matrix: [
		[ WALL, WALL, WALL, WALL, WALL ],
		[ WALL, START, WALL, END, WALL ],
		[ WALL, FLOOR, WALL, FLOOR, WALL ],
		[ WALL, FLOOR, FLOOR, FLOOR, WALL ],
		[ WALL, WALL, WALL, WALL, WALL ],
	]
};

describe('Controller component', () => {

	describe('reducer', () => {

		it('has a default position of [ 0, 0 ]', () => {
			expect(position(undefined, {type: 'DUMMY' }))
				.toEqual([ 0, 0 ]);
		});
        
		it('goUP does nothing on invalid move', () => {
			expect(position([ 0, 0 ], goUP()))
				.toEqual([ 0, 0 ]);
		});
        
		it('goUP moves coordinates on valid move', () => {
			expect(position( [ 1, 2 ], goUP())).toEqual([ 2, 2 ]);
		});
        
		it('goDOWN moves coordinates on valid move', () => {
			expect(position([ 0, 0 ], goDOWN())).toEqual([ 0, 0 ]);
		});

		it('goDOWN does nothing on invalid move', () => {
			expect(position([ 1, 3 ], goDOWN())).toEqual([ 1, 4 ]);
		});
        
		it('goRIGHT does nothing on invalid move', () => {
			expect(position( [ 0, 1 ], goRIGHT())).toEqual([ 0, 1 ]);
		});
        
		it('goRIGHT moves coordinates on valid move', () => {
			expect(position([ 1, 3 ], goRIGHT())).toEqual([ 2, 3 ]);
		});
        
		it('goLEFT does nothing on invalid move', () => {
			expect(position([ 0, 0 ], goLEFT())).toEqual([ 0, 0 ]);
		});
        
		it('goLEFT moves coordinates on valid move', () => {
			expect(position([ 3, 2 ], goLEFT())).toEqual([ 3, 1 ]);
		});
	});
});