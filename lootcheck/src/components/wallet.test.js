import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';

describe('Wallet', () => {
    const balance = 20
    const props = {balance: balance}

    const wallet = shallow(<Wallet {...props}/>)

    it('renders correctly', () => {
        expect(wallet).toMatchSnapshot();
    })

    it('display balance from props', () => {
        //this is not working, we need to DOM select the balance!!
        //expect(wallet.props().balance).toEqual(balance);
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
    })
})