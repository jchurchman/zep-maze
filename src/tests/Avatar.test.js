import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Avatar from '../Avatar/Avatar';

describe('Avatar Component', () => {

    it('renders a winky face emoji by default', () => {
        const wrapper = shallow(<Avatar />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

})