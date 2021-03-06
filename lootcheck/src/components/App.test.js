import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


/*
  Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To
  configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
  before using any of Enzyme's top level APIs, where `Adapter` is the adapter
  corresponding to the library currently being tested. For example:

  import Adapter from 'enzyme-adapter-react-15';

  To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html
  
  //compare also
  https://www.udemy.com/react-tdd/learn/v4/t/lecture/7958264?start=0
*/

import '../setupTests';


describe('App', () => {

  const app = shallow(<App />)

  it('renders App correctly', () => {
    expect(app).toMatchSnapshot();
  })


  it('contains a connected Wallet component', () => {

    //enzyme helper trick
    //console.log(app.debug())
    //returns in this case the conncet Wallet like this
    /*
     console.log src/components/App.test.js:35
      <div>
        <h2>
          Loot Check
        </h2>
        <hr />
        <Connect(Wallet) />
      </div>
    */

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('contains a connected `Loot` Component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  })
})