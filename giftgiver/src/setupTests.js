//this should allow us to test against react 16.x.x

import requestAnimation from './tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter(), disableLifecycleMethods: true})