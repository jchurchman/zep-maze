import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Avatar } from './Avatar';

describe ('Avatar Component', () => {

    it('renders a levitating man emoji by default', () => {
        const wrapper = shallow(<Avatar />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })


})