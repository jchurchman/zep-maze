import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MazePlayer from '../MazePlayer/MazePlayer';
import Avatar from '../Avatar/Avatar';
import MazeMapper from '../MazeMapper/MazeMapper';
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

describe('MazePlayer component', () => {
    it('renders a  loading div when no maze passed', () => {
        const wrapper = shallow(<MazePlayer 
            maze={ null  } 
            loading={ false }
            error={ null }
            position={[ 0, 0 ]}
            gamestate={'ACTIVE'}
        />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders a div with a maze and an avatar when child components passed', () => {
        const wrapper = shallow(
            <MazePlayer 
                MazeMapper={MazeMapper}  
                Avatar={Avatar}/>
            );
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})