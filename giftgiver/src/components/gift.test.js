import React from 'react';

import { shallow } from 'enzyme';
import Gift from './Gift';



describe('Gift', () => {
    const gift = shallow(<Gift />)

    it('renders Gift correctly', () => {
        expect(gift).toMatchSnapshot();
    })
})
