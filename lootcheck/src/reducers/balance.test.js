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
  })
});