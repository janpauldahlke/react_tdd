import React from 'react';
import { shallow } from 'enzyme';

//unconncet export!
import { Loot } from './Loot'; 

describe('Loot', () => {
    const loot = shallow(<Loot />)
    
    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    })
})
