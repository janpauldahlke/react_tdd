import React from 'react';
//mount for lifecyclcemagic here
import { mount, shallow } from 'enzyme';

//unconncet export!
import { Loot } from './loot'; 

describe('Loot', () => {
    let props = { balance: 10, bitcoin : {}}
    let loot = shallow(<Loot {...props}/>)
    
    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    })

    describe('when mounted', () => {
        const mockFetchBitcoin = jest.fn();
        
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            //reassign mounted component
            loot = mount(<Loot {...props} />)
        })
        
        it('dispatches `fetchBitcoin()` it recieves from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    })

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {balance : 10, bitcoin : { bpi: { USD: { rate : '1,000'} } } };
            loot = shallow(<Loot {...props} />)
         });

         it('displays the correct bitcoin value', () => {
             expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
         })
    })
})
