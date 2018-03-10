module.exports = (secret, guess) => {
    let matchedColorAndIndex = 0;
    let matchedColor = 0;
    let viewedColors = [];

    if (!Array.isArray(secret) || !Array.isArray(guess)) {
        return [0,0];
    }

    guess.map((element, index) => {
        if (viewedColors.includes(element)) {
            return;
        }
        viewedColors.push(element);
        if (secret[index] === element) {
            matchedColorAndIndex++;
        } else if (secret.includes(element)) {
            matchedColor++;
        }
    });

    return [matchedColorAndIndex, matchedColor];
};
