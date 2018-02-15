import * as constants from '../actions/constants';

//set state to 0 by parameter assignment as default
const balance = (state = 0, action) => {
    //switch on action type
    switch(action.type) {
        case constants.SET_BALANCE:
            return action.balance
        default:
            return balance   
    }
}

export default balance;