import React from 'react';

import { shallow } from 'enzyme';
import App from './App'; // this not exists yet // the test should fail

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

        describe('when clicking the `add gift` button', () => {

            //do beforeEach test
            beforeEach(() => {
                app.find('.btn-add').simulate('click');
            });

            //each test cleans up, so there will be no test pollution anymore
            afterEach( () => {
                //one needs to reset state to empty []
                app.setState({ gifts: []});
            });

            it('adds a new gift to `state`', () => {
                //find the button
                
                //expect results
                expect(app.state().gifts).toEqual([{id: 1}])
            });
        
            it('adds a new gift the the rendered list', () => {
                //carefully here, the button gets clicked twice, so the 
                //element in the test is already at 2 eleemts
                // -> its a test pollution
                // make this test an isolated instance
        
                //app.find('.btn-add').simulate('click');
                //now in the scope of describe
                expect(app.find('.gift-list').children().length).toEqual(1);
            });

            it('creates a Gift Component', () => {
                
                expect(app.find('Gift').exists()).toBe(true);
            })
        });
});

