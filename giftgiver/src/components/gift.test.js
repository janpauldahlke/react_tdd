import React from 'react';

import { shallow } from 'enzyme';
import Gift from './Gift';



describe('Gift', () => {
    const gift = shallow(<Gift />)

    it('renders Gift correctly', () => {
        expect(gift).toMatchSnapshot();
    })

    it('initializes a person and a present in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    })

    describe('when typing into the person input', () => {

        const person = 'Peter Parker'

        beforeEach(() => {
            //http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
            gift.find('.input-person').simulate('change', { target: { value : person}})
        })

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })

    })
})
