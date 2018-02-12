import React from 'react';

import { shallow } from 'enzyme';
import App from './App.js'; // this not exists yet // the test should fail

// create jsx component app as shallow renderer
const app = shallow(<App />);

//unit test
//checks that component renders correct

it('renders App correctly', () => {
    expect(app).toMatchSnapshot();
});