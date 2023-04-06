import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('returns a string', () => {
        expect(typeof(fizzbuzz(5))).toBe('string');
    })

    it('returns Fizz for 3',() => {
        expect(fizzbuzz(3)).toEqual('Fizz');
    } )

    it('returns Buzz for 5',() => {
        expect(fizzbuzz(5)).toEqual('Buzz');
    })

    it('returns string 1 for 1',() => {
        expect(fizzbuzz(1)).toEqual('1');
    })

    it('returns Fizz for multiples of 3',() => {
        expect(fizzbuzz(6)).toEqual('Fizz');
    } )

});
