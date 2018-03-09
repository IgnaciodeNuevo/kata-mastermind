module.exports = (arr1, arr2) => {
    let matchedColorAndIndex = 0;
    let matchedColor = 0;
    let viewedColors = [];

    arr2.map((element, index) => {
        if (viewedColors.indexOf(element) == -1) {
            viewedColors.push(element);
            if (arr1[index] != null && arr1[index] == element) {
                matchedColorAndIndex++;
            } else {
                if (arr1.indexOf(element) != -1) {
                    matchedColor++;
                }
            }
        }
    });

return [matchedColorAndIndex, matchedColor];
};
