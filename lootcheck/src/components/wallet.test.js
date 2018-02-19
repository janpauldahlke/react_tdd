import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';



describe('Wallet', () => {

    //mock redux action
    const mockDeposit = jest.fn();
    //

    const balance = 20
    //add mockdeposit to props
    const props = {balance: balance, deposit: mockDeposit}

    const wallet = shallow(<Wallet {...props}/>)

    it('renders correctly', () => {
        expect(wallet).toMatchSnapshot();
    })

    it('display balance from props', () => {
        //this is not working, we need to DOM select the balance!!
        //expect(wallet.props().balance).toEqual(balance);
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
    })

    it('it creates an inputto deposit into or withdrah from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    })

    describe('when the user types into the wallets input', () => {
        //as string because input
        const userBalance = '25'

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {
                target : { value : userBalance }
            })
        })

        it('updates the local wallet balance in `state` AND converts it into number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
        })


        describe('and the user wants to make a deposit', () => {

            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');

            })

            it('dispatches the `deposit()` it recieves from the deposit with the local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })
        
    })
})