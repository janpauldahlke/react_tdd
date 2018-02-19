import balanceReducer from './balance';

//cookie awareness reducer
import balanceReducer2 from './balance'

import * as constants from '../actions/constants';

describe('balance reducer overall', () => {

    describe('when initializing', () => {
      const balance = 10;

    it('sets a balance', () => {
      
      //state of reducers as args;
      //1st arg is undefined at start
      //2nd arg is object containing data
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance} ))
        .toEqual(balance);
    });

    describe('then re-initialisation', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    });
  })
  
  it('deposits a into the balance', () => {
    const deposit = 10;
    const initialState = 5;
    const sum = deposit+initialState;

    expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit} ))
      .toEqual(sum)
  });

  it('withdraw from the balance', () => {
    const withdraw = 50;
    const initialState = 120;
    const sum = initialState - withdraw;

    expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdraw} ))
      .toEqual(sum)
  });

});