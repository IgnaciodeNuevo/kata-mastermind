require('should');
const Mastermind = require('./mastermind');

describe("Mastermind", () => {
    it("Should fail when bad guess", () => {
        arr1 = ['blue'];
        arr2 = ['red'];
        result = [0, 0];
        Mastermind(arr1, arr2).should.eql(result);
    });
});
