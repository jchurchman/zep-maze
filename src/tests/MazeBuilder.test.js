import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MazeMapper } from '../MazeMapper/MazeMapper';
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
}

describe('MazeMapper component', () => {

    it('renders a maze table when given a maze object', () => {
        const wrapper = shallow(<MazeMapper matrix={maze.matrix} x={2} y={2}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    
})