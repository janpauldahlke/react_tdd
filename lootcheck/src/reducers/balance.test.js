import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balance reducer overall', () => {

  it('sets a balance', () => {
    const balance = 10;
    //state of reducers as args;
    //1st arg is undefined at start
    //2nd arg is object containing data
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance} ))
      .toEqual(balance);
  });
});