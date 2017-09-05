import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Tile } from '../Tile/Tile';
import { WALL, FLOOR, START, END } from '../Tile/Tile.constants';

describe('Tile component', () => {

    it('renders an empty td element by default', () => {
        const wrapper = shallow(<Tile/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
    
    describe('provides appropriate styling when passed a value', () => {
        it('wall styling', () => {
            const wrapper = shallow(<Tile value={WALL}/>);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });

        it('floor styling', () => {
            const wrapper = shallow(<Tile value={FLOOR}/>);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });

        it('Start styling', () => {
            const wrapper = shallow(<Tile value={START}/>);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });

        it('end styling', () => {
            const wrapper = shallow(<Tile value={END}/>);
            expect(toJSON(wrapper)).toMatchSnapshot();
        });

    })
})