import React from 'react';

import { shallow } from 'enzyme';
import Gift from './Gift';



describe('Gift', () => {
    //this is how to apply mock fn to use it on removeGIft
		const mockRemove = jest.fn();
		const id = 1;
		//apply props that mirror the props given to <Gift /> from <App />
		const props = { gift: { id }, removeGift: mockRemove }; 

		//now spread the props to the shallow render component
		//const gift = shallow(<Gift />)
		const gift = shallow(<Gift {...props}/>)

    it('renders Gift correctly', () => {
        expect(gift).toMatchSnapshot();
    })

    it('initializes a person and a present in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    })

    describe('when typing into the person input', () => {

        const person = 'Peter Parker';
        

        beforeEach(() => {
            //http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
            gift.find('.input-person').simulate('change', { target: { value : person}})
        })

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe('whene typing into the present input', () => {
        const present = 'champagne'

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target : { value: present}})
        })

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        })
    })

    describe('when clicking the `remove gift` button', () => {

        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        })

        //these is working with jest mok functions
        it('calls the removeGift callback', () => {
					//https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalledwitharg1-arg2-
					expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })
})
