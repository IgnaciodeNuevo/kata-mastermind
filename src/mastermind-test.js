require('should');
const Mastermind = require('./mastermind');

describe("Mastermind game", () => {

    it("Should return both 0 when bad guess", () => {
        const secret = ['blue'];
        const mastermind = new Mastermind(secret);
        const guess = ['red'];
        const expected = {
                matchedColorAndIndex: 0,
                matchedColor: 0
        };
         mastermind.play(guess).should.deepEqual(expected);
    });

    it("Should return matched color when position is incorret but color is correct", () => {
        const secret = ['blue', 'red'];
        const mastermind = new Mastermind(secret);
        const guess = ['red', 'yellow'];
        const expected = {
            matchedColorAndIndex: 0,
            matchedColor: 1
        };
         mastermind.play(guess).should.deepEqual(expected);
    });

    it("Should match color at right position", () => {
        const secret = ['red', 'blue'];
        const mastermind = new Mastermind(secret);
        const guess = ['red', 'orange'];
        const expected = {
            matchedColorAndIndex: 1,
            matchedColor: 0
        };
        mastermind.play(guess).should.deepEqual(expected);
    });

    it("Should fail when no secret is provided", () => {
        (function() { new Mastermind(); }).should.throw('Should provide a valid input');
    });

    it("Should fail when no guess is provided", () => {
        const secret = ['red', 'blue'];
        const mastermind = new Mastermind(secret);
        (function() { mastermind.play(); }).should.throw('Should provide a valid input');
    });
});
