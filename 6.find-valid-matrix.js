function findValidMatrix(rowSum, colSum) {
    let first = rowSum.reduce((a, b) => a + b, 0);
    let second = colSum.reduce((a, b) => a + b, 0);
    if (first != second || rowSum.length < 0 || rowSum.length > 500 || colSum.length < 0 || colSum.length > 500) {
        return 'Please enter valid arrays'
    }
    let result = [[], []];
    for (let i = 0; i < rowSum.length; i++) {
        for (let j = 0; j < colSum.length; j++) {
            result[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= result[i][j];
            colSum[j] -= result[i][j];
        }
    }

    return result;
}

console.log(findValidMatrix([3, 8], [4, 7]));
// console.log(findValidMatrix([5,7,10], [8,6,8]));
console.log(findValidMatrix([14, 9], [6, 9, 8]));
console.log(findValidMatrix([1, 0], [1]));
console.log(findValidMatrix([0], [0]));