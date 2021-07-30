// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    return matrix.reduce(function (sortArr, subArr, index) {
        if (index === 0 || index % 2 === 0) {
            sortArr = sortArr.concat(subArr);
        } else sortArr = sortArr.concat(subArr.reverse());
        return sortArr;
    }, []);
};
