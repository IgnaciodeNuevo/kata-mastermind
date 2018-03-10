require('should');
const Mastermind = require('./mastermind');

describe("Mastermind", () => {
    it("Should fail when bad guess", () => {
        const secret = ['blue'];
        const guess = ['red'];
        const expected = [0, 0];
        Mastermind(secret, guess).should.deepEqual(expected);
    });

    it("Should match guessed color", () => {
        const secret = ['blue', 'red'];
        const guess = ['red', 'yellow'];
        const expected = [0, 1];
        Mastermind(secret, guess).should.deepEqual(expected);
    });

    it("Should match color at right position", () => {
        const secret = ['red', 'blue'];
        const guess = ['red', 'orange'];
        const expected = [1, 0];
        Mastermind(secret, guess).should.deepEqual(expected);
    });


    it("Should not match again allowed colors", () => {
        const secret = ['red', 'blue'];
        const guess = ['red', 'red'];
        const expected = [1, 0];
        Mastermind(secret, guess).should.deepEqual(expected);
    });

    it("Should check proper inputs", () => {
        const guess = ['red', 'red'];
        Mastermind(0, guess).should.deepEqual([0,0]);
    });
});
