module.exports = (arr1, arr2) => {
    let matchedColorAndIndex = 0;
    let matchedColor = 0;
    arr1.map((element, index) => {
        if (arr2[index] != null && arr2[index] == element) {
            matchedColorAndIndex++;
        } else {
            if (arr2.indexOf(element) != -1) {
                matchedColor++;
            }
        }

    });
    return [matchedColorAndIndex, matchedColor];
};
