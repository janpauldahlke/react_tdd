//this is reuslting from
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

/*
  also note:
  using lifecyle methods needs a disableLifecycleMethods flag to set to true
  default here is false and so the mount ComponentDidDmount on Loot will not work
  https://www.udemy.com/react-tdd/learn/v4/t/lecture/7958312?start=450
*/



import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
configure( { disableLifecycleMethods : true});