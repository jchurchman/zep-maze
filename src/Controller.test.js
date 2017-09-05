import React from 'react';
import { goUP, goDOWN, goRIGHT, goLEFT } from './Controller.actions';
import reducer from './Controller.reducer';


describe('Controller component', () => {

	describe('reducer', () => {

		it('has a default value of x: 0, y: 0', () => {
			expect(reducer(undefined, {type: 'DUMMY' })).toEqual({ matrix: [], x: 0, y: 0});
        });
        
        it('goUP', () => {
            expect(reducer({ matrix: [], x: 0, y: 0}, goUP())).toEqual({ matrix: [], x: 0, y: 1});
        });
        
        it('goDOWN', () => {
            expect(reducer({ matrix: [], x: 0, y: 0}, goDOWN())).toEqual({ matrix: [], x: 0, y: - 1});
        });
        
        it('goRIGHT', () => {
            expect(reducer({ matrix: [], x: 0, y: 0}, goRIGHT())).toEqual({ matrix: [], x: 1, y: 0});
        });
        
        it('goLEFT', () => {
            expect(reducer({ matrix: [], x: 0, y: 0}, goLEFT())).toEqual({ matrix: [], x: - 1, y: 0 });
        });
	});
});