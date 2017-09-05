import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MazeView } from './MazeView';
import { Avatar } from './Avatar';
import { MazeBuilder } from './MazeBuilder';

describe('MazeView component', () => {
    it('renders a div when no child components passed', () => {
        const wrapper = shallow(<MazeView/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})