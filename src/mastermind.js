module.exports = (arr1, arr2) => {
    let matchedColorAndIndex = 0;
    let matchedColor = 0;
    let viewedColors = [];

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [0,0];
    }

    arr2.map((element, index) => {
        if (viewedColors.includes(element)) {
            return;
        }
        viewedColors.push(element);
        if (arr1[index] && arr1[index] === element) {
            matchedColorAndIndex++;
        } else {
            if (arr1.includes(element)) {
                matchedColor++;
            }
        }
    });

    return [matchedColorAndIndex, matchedColor];
};
