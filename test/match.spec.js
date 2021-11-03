import match from '../dist/index.js';
import pkg from 'chai/index.js';
const { expect } = pkg;

describe('match() is like the switch statement but it works as expression', () => {
    const evenSquare = x => match([
        [x => x !== 0 && x % 2 === 0, x => Math.pow(x, 2)],
        [x => x % 2 !== 0, x => x],
    ], 0, x);

    it('if number x is even and is not zero, function should return square value of x', () => {
        expect(evenSquare(2)).to.equal(4);
    });

    it('if number x is odd, function should return just x', () => {
        expect(evenSquare(3)).to.equal(3);
    });

    it('if number x is zero, function should return 0. because there are no matched case, so function should return default value 0', () => {
        expect(evenSquare(0)).to.equal(0);
    });
});
