//creates a complete mock store in context of this test
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const API_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//it returns a function! redux thunk :-)
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
    bitcoin: {}
});
const mockResponse = {body : {bpi: 'bitcoin price index'}}

fetchMock.get(
    API_ENDPOINT,
    mockResponse
)

describe('bitcoin api behave', () => {
    
    // beforeEach(() =>  {

    // });

    it('it creat an async action to fetch bitcoin value', () => {
        const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}];

        return store.dispatch(fetchBitcoin())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
            .catch((err) => {
                console.log(err);
            })
    });
});

