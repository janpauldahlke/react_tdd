import { max_number} from './index';

describe('max number', () => {
    
    describe('give an empty array', () => {
        
        it('returns 0', () => {
            expect(max_number([])).toEqual(0)
        })
    })
    describe('given an array of numbers', () =>  {
        it('returns the max number', () => {
            expect(max_number([1,2,3])).toEqual(3)
        })
    })
})