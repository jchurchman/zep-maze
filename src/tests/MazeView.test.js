import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MazeView } from '../MazeView/MazeView';
import { Avatar } from '../Avatar/Avatar';
import { MazeBuilder } from '../MazeBuilder';
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

describe('MazeView component', () => {
    it('renders a div when no child components passed', () => {
        const wrapper = shallow(<MazeView/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders a div with a maze and an avatar when child components passed', () => {
        const wrapper = shallow(
            <MazeView 
                MazeBuilder={<MazeBuilder matrix={maze.matrix}/>}  
                Avatar={Avatar}/>
            );
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})