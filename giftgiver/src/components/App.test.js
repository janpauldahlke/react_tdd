import React from 'react';

import { shallow } from 'enzyme';
import App from './App.js'; // this not exists yet // the test should fail


describe('App', () => {
    // create jsx component app as shallow renderer
    const app = shallow(<App />);

    //unit test
    //checks that component renders correct

    it('renders App correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with an empty list of gifts', () => {
        //app.state to reach for state
        expect(app.state().gifts).toEqual([]);
    });

    it('adds a new gift to `state` when clicking `add gift` button', () => {
        //find the button
        app.find('.btn-add').simulate('click');
        //expect results
        expect(app.state().gifts).toEqual([{id: 1}])
    });

    it('adds a new gift the the rendered list, when clcking the `add gift` button', () => {
        //carefully here, the button gets clicked twice, so the 
        //element in the test is already at 2 eleemts
        // -> its a test pollution
        // make this test an isolated instance

        app.find('.btn-add').simulate('click');
        expect(app.find('.gift-list').children().length).toEqual(2);
    })
})