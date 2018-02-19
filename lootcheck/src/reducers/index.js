import { combineReducers } from 'redux';
import balance from './balance';
import bitcoin from './bitcoin';

export default combineReducers({
    balance: balance,
    bitcoin: bitcoin
    //one could es6 shorthand like
    // bitcoin,
    // balance
    //but this way its more readable
})