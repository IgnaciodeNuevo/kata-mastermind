require('should');
const Mastermind = require('./mastermind');

describe("Mastermind", () => {
    it("Should fail when bad guess", () => {
        arr1 = ['blue'];
        arr2 = ['red'];
        result = [0, 0];
        Mastermind(arr1, arr2).should.deepEqual(result);
    });

    it("Should match guessed color", () => {
        arr1 = ['blue', 'red'];
        arr2 = ['red', 'yellow'];
        result = [0, 1];
        Mastermind(arr1, arr2).should.deepEqual(result);
    });

    it("Should match color at right position", () => {
        arr1 = ['red', 'blue'];
        arr2 = ['red', 'orange'];
        result = [1, 0];
        Mastermind(arr1, arr2).should.deepEqual(result);
    });


    it("Should not match again allowed colors", () => {
        arr1 = ['red', 'blue'];
        arr2 = ['red', 'red'];
        result = [1, 0];
        Mastermind(arr1, arr2).should.deepEqual(result);
    });
});
