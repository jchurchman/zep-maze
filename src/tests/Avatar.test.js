import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Avatar } from '../Avatar/Avatar';
import { UP, DOWN, LEFT, RIGHT } from '../Controller/Controller.constants';

describe('Avatar Component', () => {

    it('renders a levitating man emoji by default', () => {
        const wrapper = shallow(<Avatar />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders a left pointing emoji when given left stance', () => {
        const wrapper = shallow(<Avatar stance={LEFT}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a right pointing emoji when given right stance', () => {
        const wrapper = shallow(<Avatar stance={RIGHT}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a up pointing emoji when given up stance', () => {
        const wrapper = shallow(<Avatar stance={UP}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a down pointing emoji when given down stance', () => {
        const wrapper = shallow(<Avatar stance={DOWN}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})