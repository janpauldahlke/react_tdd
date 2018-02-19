import * as constants from '../actions/constants';
//add cookie to store balance in browser
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

//set state to 0 by parameter assignment as default
const balance = (state = 0, action) => {

    let balance;

    //switch on action type
    switch(action.type) {
        case constants.SET_BALANCE:
            balance =  action.balance
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdraw;
            break;
        default:
            //return cookie if there or else gimme state 
            balance = parseInt(read_cookie(BALANCE_COOKIE, 10))  || state;    
    }

    bake_cookie(BALANCE_COOKIE, balance)
    return balance;
}

export default balance;