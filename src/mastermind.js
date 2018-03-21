module.exports = function(secret) {
    validateInput(secret);
    const self = this;
    self.secret = secret;

    function play(guess) {
        validateInput(guess);
    
        return guess.map((element, index) => {
            const matchedColorAndIndex = (self.secret[index] === element) ? 1 : 0; 
            const matchedColor = !matchedColorAndIndex && self.secret.includes(element) ? 1 : 0;
            return {
                matchedColorAndIndex, 
                matchedColor
            };
        }).reduce((accumulator, currentValue) => {
            return {
                matchedColorAndIndex: accumulator.matchedColorAndIndex + currentValue.matchedColorAndIndex,
                matchedColor: accumulator.matchedColor + currentValue.matchedColor
            };
        });
    }

    function validateInput(input) {
        if (!Array.isArray(input) || Array.length === 0) {
            throw new Error(`Should provide a valid input`);
        }
    }

    return {
        play
    };
};
